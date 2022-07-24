const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14
const HEAL_VALUE = 20;

const MODE_ATTACK = 'ATTACK'
const MODE_STRONG_ATTACK = 'STRONG_ATTACK'
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK'
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK'
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK'
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL'
const LOG_GAME_OVER = 'GAME_OVER'

let chosenMaxLife
try{
  chosenMaxLife = getMaxLifeValue()
} catch(error){
  console.error(error)
  chosenMaxLife = 100
} finally {
  
}

let battleLog = []
let currentMonsterHealth = chosenMaxLife
let currentPlayerHealth = chosenMaxLife
let hasBonusLife = true


adjustHealthBars(chosenMaxLife)

function getMaxLifeValue() {
  const enteredValue = prompt('Maximum life for you and the monster. ', '100')
  let parseValue = parseInt(enteredValue);

  if (isNaN(parseValue) || parseValue <= 0) {
    throw {message: 'Invalid user input, not a number!'}
  }

  return parseValue

}


function writeToLog(event, value, monsterHealth, playerHealth) {
  let logEntry = {
    event: event,
    value: value,
    finalMonsterHealth: monsterHealth,
    finalPlayerHealth: playerHealth
  }

  switch (event) {
    case LOG_EVENT_PLAYER_ATTACK:
      logEntry.target = 'MONSTER'
      break
    case LOG_EVENT_PLAYER_STRONG_ATTACK:
      logEntry.target = 'MONSTER'
      break
    case LOG_EVENT_MONSTER_ATTACK:
      logEntry.target = 'PLAYER'
      break
    case LOG_EVENT_PLAYER_HEAL:
      logEntry.target = 'PLAYER'
      break
    default:
      logEntry.target = 'EMPTY'

    battleLog.push(logEntry)

  }

  battleLog.push(logEntry)
}

function reset() {
  currentMonsterHealth = chosenMaxLife
  currentPlayerHealth = chosenMaxLife
  resetGame(chosenMaxLife)
}

function endRound() {
  const initialPlayerLife = currentPlayerHealth
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE)
  currentPlayerHealth -= playerDamage
  writeToLog(LOG_EVENT_MONSTER_ATTACK, 
    playerDamage,
    currentMonsterHealth,
    currentPlayerHealth)

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false
    removeBonusLife()
    currentPlayerHealth = initialPlayerLife
    setPlayerHealth(initialPlayerLife)
    alert('You would be dead but bonus life saved you!')
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    writeToLog(LOG_EVENT_MONSTER_ATTACK, 
      'You won!',
      currentMonsterHealth,
      currentPlayerHealth)
  
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    writeToLog(LOG_EVENT_MONSTER_ATTACK, 
      'You lost!',
      currentMonsterHealth,
      currentPlayerHealth)
  
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    writeToLog(LOG_EVENT_MONSTER_ATTACK, 
      'You have a draw',
      currentMonsterHealth,
      currentPlayerHealth)
  } 
  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    reset()
  }
}

function attackMonster(modeToAttack) {
  let maxDamage
  let logEvent
  if (modeToAttack === MODE_ATTACK) {
    maxDamage = ATTACK_VALUE
    logEvent = LOG_EVENT_PLAYER_ATTACK
  } else if (modeToAttack === MODE_STRONG_ATTACK) {
    maxDamage = STRONG_ATTACK_VALUE
    logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK
  }

  const damage = dealMonsterDamage(maxDamage)
  currentMonsterHealth -= damage
  writeToLog(logEvent, 
    damage,
    currentMonsterHealth,
    currentPlayerHealth)
  endRound()
}

function attackHandler() {
  attackMonster(MODE_ATTACK)
}

function strongAttackHandler() {
  attackMonster(MODE_STRONG_ATTACK)
}

function healPlayerHandler() {
  let healValue = HEAL_VALUE
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    healValue = chosenMaxLife - currentPlayerHealth
  }
  increasePlayerHealth(healValue)
  currentPlayerHealth += healValue
  writeToLog(LOG_EVENT_PLAYER_HEAL, 
    healValue,
    currentMonsterHealth,
    currentPlayerHealth)
  endRound()
}

function printLogHandler() {
  // for (let i = 0; i < battleLog.length; i++) {
  //   console.log(battleLog[i])
  // }

  // for (const logEntry of battleLog) {
  //   console.log(logEntry)
  // }

  for (const logEntry of battleLog) {
    for (const key in logEntry) {
      // console.log(key + "  ->  " + logEntry[key]) 
      console.log(`${key} -> ${logEntry[key]}`)
    }
  }

}

attackBtn.addEventListener('click', attackHandler)
strongAttackBtn.addEventListener('click', strongAttackHandler)
healBtn.addEventListener('click', healPlayerHandler)
logBtn.addEventListener('click', printLogHandler)