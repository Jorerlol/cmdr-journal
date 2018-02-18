export enum JournalEvents {

    //fileheader
    fileHeader = "Fileheader",

    //startup
    cargo = "Cargo",
    clearSavedGame = "ClearSavedGame",
    loadout = "Loadout",
    materials = "Materials",
    newCommander = "NewCommander",
    loadGame = "LoadGame",
    passengers = "Passengers",
    progress = "Progress",
    rank = "Rank",

    //TRAVEL
    docked = "Docked",
    dockingCancelled = "DockingCancelled",
    dockingDenied = "DockingDenied",
    dockingGranted = "DockingGranted",
    dockingRequested = "DockingRequested",
    dockingTimeout = "DockingTimeout",
    fsdJump = "FSDJump",
    liftoff = "Liftoff",
    location = "Location",
    startJump = "StartJump",
    supercruiseEntry = "SupercruiseEntry",
    supercruiseExit = "SupercruiseExit",
    touchdown = "Touchdown",
    undocked = "Undocked",

    //COMBAT
    bounty = "Bounty",
    capShipBond = "CapShipBond",
    died = "Died",
    escapeInterdiction = "EscapeInterdiction",
    factionKillBond = "FactionKillBond",
    heatDamage = "HeatDamage",
    heatWarning = "HeatWarning",
    hullDamage = "HullDamage",
    interdicted = "Interdicted",
    interdiction = "Interdiction",
    pvpKill = "PVPKill",
    shieldState = "ShieldState",

    //EXPLORATION
    scan = "Scan",
    materialCollected = "MaterialCollected",
    materialDiscarded = "MaterialDiscarded",
    materialDiscovered = "MaterialDiscovered",
    buyExplorationData = "BuyExplorationData",
    sellExplorationData = "SellExplorationData",
    screenshot = "Screenshot",

    //TRADE
    buyTradeData = "BuyTradeData",
    collectCargo = "CollectCargo",
    ejectCargo = "EjectCargo",
    marketBuy = "MarketBuy",
    miningRefined = "MiningRefined",

    //STATION SERVICES
    buyAmmo = "BuyAmmo",
    buyDones = "BuyDrones",
    communityGoalDiscard = "CommunityGoalDiscard",
    communityGoalJoin = "CommunityGoalJoin",
    communityGoalReward = "CommunityGoalReward",
    crewAssign = "CrewAssign",
    crewFire = "CrewFire",
    crewHire = "CrewHire",
    engineerContribution = "EngineerContribution",
    engineerApply = "EngineerApply",
    engineerCraft = "EngineerCraft",
    engineerProgress = "EngineerProgress",
    fetchRemoteModule = "FetchRemoteModule",
    massModuleStore = "MassModuleStore",
    missionAbandoned = "MissionAbandoned",
    missionAccepted = "MissionAccepted",
    missionCompleted = "MissionCompleted",
    missionFailed = "MissionFailed",
    moduleBuy = "ModuleBuy",
    moduleRetrieve = "ModuleRetrieve",
    moduleSell = "ModuleSell",
    moduleSellRemote = "ModuleSellRemote",
    moduleStore = "ModuleStore",
    moduleSwap = "ModuleSwap",
    payFines = "PayFines",
    payLegacyFines = "PayLegacyFines",
    redeemVoucher = "RedeemVoucher",
    refuelAll = "refuelAll",
    refuelPartial = "refuelPartial",
    repair = "Repair",
    repairAll = "RepairAll",
    restockVehicle = "RestockVehicle",
    scientificResearch = "ScientificResearch",
    sellDrones = "SellDrones",
    setUserShipName = "SetUserShipName",
    shipyardBuy = "ShipyardBuy",
    shipyardNew = "ShipyardNew",
    shipyardSell = "ShipyardSell",
    shipyardTransfer = "ShipyardTransfer",
    shipyardSwap = "ShipyardSwap",

    //POWERPLAY
    powerplayCollect = "PowerplayCollect",
    powerplayDefect = "PowerplayDefect",
    powerplayDeliver = "PowerplayDeliver",
    powerplayFastTrack = "PowerplayFastTrack",
    powerplayJoin = "PowerplayJoin",
    powerplayLeave = "PowerplayLeave",
    powerplaySalary = "PowerplaySalary",
    powerplayVote = "PowerplayVote",
    powerplayVoucher = "PowerplayVoucher",

    //OTHER EVENTS
    approachSettlement = "ApproachSettlement",
    cockpitBreached = "CockpitBreached",
    commitCrime = "CommitCrime",
    continued = "Continued",
    crewLaunchFighter = "CrewLaunchFighter",
    crewMemberJoins = "CrewMemberJoins",
    crewMemberQuits = "CrewMemberQuits",
    crewMemberRoleChange = "CrewMemberRoleChange",
    datalinkScan = "DatalinkScan",
    dataScanned = "DataScanned",
    dockFighter = "DockFighter",
    dockSRV = "DockSRV",
    endCrewSession = "EndCrewSession",
    fuelScoop = "FuelScoop",
    friends = "Friends",
    jetConeBoost = "JetConeBoost",
    jetConeDamage = "JetConeDamage",
    joinACrew = "JoinACrew",
    kickCrewMember = "KickCrewMember",
    launchFighter = "LaunchFighter",
    launchSRV = "LaunchSRV",
    promotion = "Promotion",
    quitACrew = "QuitACrew",
    rebootRepair = "RebootRepair",
    receiveText = "ReceiveText",
    resurrect = "Resurrect",
    scanned = "Scanned",
    selfDestruct = "SelfDestruct",
    sendText = "SendText",
    synthesis = "Synthesis",
    vehicleSwitch = "VehicleSwitch",
    wingAdd = "WingAdd",
    wingInvite = "WingInvite",
    wingJoin = "WingJoin",
    wingLeave = "WingLeave"
}