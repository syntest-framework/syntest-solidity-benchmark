const NasiLiquidityPoolFactory = artifacts.require("NasiLiquidityPoolFactory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NasiLiquidityPoolFactory', (accounts) => {
	it('test for NasiLiquidityPoolFactory', async () => {
		const stringEnxJwKN = "9KTstJDYHXdnoBElsVhBLlufNjDwfkBLu164rnmKJL6ujc"
		const stringa9uE51I = "Nd3uP2WXOtrkDUKMBig7AGgPBuCCAvWpwTUbeQfW3B4MGetvcD78ds5I6bqcFBwOq0sSySlmTemiIdGDAntoUZxS7kyKfnyHG"
		const uintheGWzWP = BigInt("79")
		const NasiLiquidityPoolFactorymfYyez = await NasiLiquidityPoolFactory.new(stringEnxJwKN, stringa9uE51I, uintheGWzWP, {from: accounts[2]});
		const uintR0YrcWV = BigInt("672")
		const addressqysQ5q3 = accounts[0]
		const uintGRjQy4A = BigInt("1744")
		const addressAaiRGve = accounts[3]
		const addressVUrG3aV = accounts[3]
		const booloKAD9q8 = false
		const addressZgBAWCL = accounts[3]
		const uintMs46vbd = BigInt("1885")
		const boolF1HHd5i = await NasiLiquidityPoolFactorymfYyez.decreaseAllowance.call(addressqysQ5q3, uintR0YrcWV, {from: accounts[4]});
		const boolihci6Kk = await NasiLiquidityPoolFactorymfYyez.mint.call(addressAaiRGve, uintGRjQy4A, {from: accounts[4]});
		const addresszhs91pb = await NasiLiquidityPoolFactorymfYyez.addMinter.call(addressVUrG3aV, {from: accounts[4]});
		const uint256rMzUPQy = await NasiLiquidityPoolFactorymfYyez.addLpToken.call(uintMs46vbd, addressZgBAWCL, booloKAD9q8, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringw9NzpVk = "HXhJtbyNgEIdOPKmAUdByg1VYwHw8q5BPhGoXUEoXFNW4HDxmrK2cDpCHfKh4dm3quRS4GOem"
		const stringPsS9KwE = "x0E9Iw5CfWBMuTpdRkLCdHrox4hA1arYP9iCwn9kyIq49cIkRcyo98LWs4rC5xohHJebglx"
		const uintTmmbH0P = BigInt("181")
		const NasiLiquidityPoolFactorypPt7gZl = await NasiLiquidityPoolFactory.new(stringw9NzpVk, stringPsS9KwE, uintTmmbH0P, {from: accounts[2]});
		const uintv4XppM0 = BigInt("1184")
		const addressVE0hOgx = accounts[2]
		const addressGLsdvNX = accounts[3]
		const uintAjdMcHx = BigInt("1172")
		const boolNlkNVEE = false
		const uintO2M2FBJ = BigInt("829")
		const uintnf1qxTr = BigInt("1525")
		const uintnbjbUCj = BigInt("884")
		const addressnEkmdRO = accounts[0]
		const uintaKUMzto = BigInt("708")
		const boolv0FLfSJ = await NasiLiquidityPoolFactorypPt7gZl.mint.call(addressVE0hOgx, uintv4XppM0, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Vy9fjXk = await NasiLiquidityPoolFactorypPt7gZl.pendingNasi.call(uintAjdMcHx, addressGLsdvNX, {from: accounts[4]});
		const uint256WO72xoS = await NasiLiquidityPoolFactorypPt7gZl.setAllocationPoint.call(uintnf1qxTr, uintO2M2FBJ, boolNlkNVEE, {from: accounts[4]});
		const boolAv0aA3t = await NasiLiquidityPoolFactorypPt7gZl.approve.call(addressnEkmdRO, uintnbjbUCj, {from: accounts[3]});
		const uint256DU1ARb = await NasiLiquidityPoolFactorypPt7gZl.burn.call(uintaKUMzto, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressyIKxHqq = accounts[1]
		const addressOexAH3E = accounts[2]
		const uintcteyw05 = BigInt("1308")
		const uintdAAS9QC = BigInt("736")
		const NasiLiquidityPoolFactorywpjSca = await NasiLiquidityPoolFactory.new(addressyIKxHqq, addressOexAH3E, uintcteyw05, uintdAAS9QC, {from: accounts[2]});
		const uintfuWjIOT = BigInt("110")
		const addressV2IfjR = accounts[1]
		const addressKMG6jC5 = accounts[2]
		const addressCqw5NDZ = accounts[2]
		const addressfYqUg0C = "0x0000000000000000000000000000000000000001"
		const uintA8gnwBN = BigInt("1200")
		const addresszQNAfA = accounts[3]
		const uintAgLKmWj = BigInt("1129")
		const addressZRjQr7j = accounts[4]
		const boolBFUyrd9 = await NasiLiquidityPoolFactorywpjSca.increaseAllowance.call(addressV2IfjR, uintfuWjIOT, {from: accounts[0]});
		await NasiLiquidityPoolFactorywpjSca.massUpdatePools.call({from: accounts[1]});
		const addressbamUJPq = await NasiLiquidityPoolFactorywpjSca.delegate.call(addressKMG6jC5, {from: accounts[4]});
		const addressv3FXSra = await NasiLiquidityPoolFactorywpjSca._delegate.call(addressfYqUg0C, addressCqw5NDZ, {from: accounts[3]});
		const boolrHCaWO = await NasiLiquidityPoolFactorywpjSca.approve.call(addresszQNAfA, uintA8gnwBN, {from: accounts[1]});
		const boolCsMmiGW = await NasiLiquidityPoolFactorywpjSca.decreaseAllowance.call(addressZRjQr7j, uintAgLKmWj, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressmTYud83 = accounts[2]
		const addressx7UDU4 = accounts[4]
		const uintIisG71g = BigInt("755")
		const uintI61hO7A = BigInt("45")
		const NasiLiquidityPoolFactoryiqB5wB4 = await NasiLiquidityPoolFactory.new(addressmTYud83, addressx7UDU4, uintIisG71g, uintI61hO7A, {from: accounts[1]});
		const uintJTJFsg9 = BigInt("1456")
		const uintkkI37d = BigInt("1052")
		const addressxvIUIDs = "0x0000000000000000000000000000000000000001"
		const uint256qBy5gJu = await NasiLiquidityPoolFactoryiqB5wB4.migrate.call(uintJTJFsg9, {from: accounts[3]});
		const boolybxvryB = await NasiLiquidityPoolFactoryiqB5wB4.approve.call(addressxvIUIDs, uintkkI37d, {from: accounts[0]});
		const addressS3BEFqW = await NasiLiquidityPoolFactoryiqB5wB4.owner.call({from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringWSdyYEd = "tlMWLUS8DqfJN5BsYd1TdyRuI71KBToEqyE51qT78of5fxO6k5LYs5W1j9UG94qY97jhmZ"
		const stringQxw02TB = "jeezjYXiobAaLlpqD2DFdWRU3gtl0D7BRf8O"
		const uintGzvNq7F = BigInt("227")
		const NasiLiquidityPoolFactory9Z3myJ = await NasiLiquidityPoolFactory.new(stringWSdyYEd, stringQxw02TB, uintGzvNq7F, {from: accounts[4]});
		const addressg66pYrk = accounts[4]
		const uintDkyPoax = BigInt("1350")
		const addresswNdkzBt = accounts[3]
		const addressrU0lcc = accounts[1]
		const addressflfjYXn = accounts[0]
		await NasiLiquidityPoolFactory9Z3myJ.whenPaused.call({from: accounts[5]});
		const uint256ptWz5RM = await NasiLiquidityPoolFactory9Z3myJ.getCurrentVotes.call(addressg66pYrk, {from: accounts[5]});
		const uint256knZwEZB = await NasiLiquidityPoolFactory9Z3myJ.totalSupply.call({from: accounts[1]});
		const boolIUAML9o = await NasiLiquidityPoolFactory9Z3myJ.transferFrom.call(addressrU0lcc, addresswNdkzBt, uintDkyPoax, {from: accounts[4]});
		const addressg2Qqy3b = await NasiLiquidityPoolFactory9Z3myJ.setMigrator.call(addressflfjYXn, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringm8qC3vV = "m4yzNpHh3BScqX5dJSmHPDgvl4cbfqXeIV5dnAI6MnysGF2QFMULvzcR9pFn4AWN"
		const stringh62IY6K = "K6gfdWDYu1sYIegThV3oixERIXpjKHL5b3DFpT6nlAk3UlMhK3yCUJDH5tEO"
		const uintXGL5aHt = BigInt("223")
		const NasiLiquidityPoolFactoryd9C5R5Q = await NasiLiquidityPoolFactory.new(stringm8qC3vV, stringh62IY6K, uintXGL5aHt, {from: accounts[1]});
		const addressNPOwNcf = accounts[0]
		const uintkdVE6iI = BigInt("1703")
		const addressYST04x5 = accounts[1]
		await NasiLiquidityPoolFactoryd9C5R5Q.onlyOwner.call({from: accounts[5]});
		const addresseGUjSLE = await NasiLiquidityPoolFactoryd9C5R5Q.setMigrator.call(addressNPOwNcf, {from: accounts[3]});
		const boolaKQAQMl = await NasiLiquidityPoolFactoryd9C5R5Q.transfer.call(addressYST04x5, uintkdVE6iI, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const address8t8Raa = accounts[2]
		const addressI2XiIdX = accounts[4]
		const uintkPQtfiZ = BigInt("755")
		const uintvGIy6WN = BigInt("45")
		const NasiLiquidityPoolFactoryiqB5wB4 = await NasiLiquidityPoolFactory.new(address8t8Raa, addressI2XiIdX, uintkPQtfiZ, uintvGIy6WN, {from: accounts[1]});
		const boolQtTIdAW = false
		const addresswPZgZdr = accounts[5]
		const uintIR2Ht1p = BigInt("1999")
		const uintUrW7Ydg = BigInt("1456")
		const uinta8D3IO = BigInt("1052")
		const addressrolEzn1 = "0x0000000000000000000000000000000000000001"
		const uint256LNGfQdo = await NasiLiquidityPoolFactoryiqB5wB4.addLpToken.call(uintIR2Ht1p, addresswPZgZdr, boolQtTIdAW, {from: accounts[5]});
		const uint256qBy5gJu = await NasiLiquidityPoolFactoryiqB5wB4.migrate.call(uintUrW7Ydg, {from: accounts[3]});
		const boolybxvryB = await NasiLiquidityPoolFactoryiqB5wB4.approve.call(addressrolEzn1, uinta8D3IO, {from: accounts[0]});
		const addressS3BEFqW = await NasiLiquidityPoolFactoryiqB5wB4.owner.call({from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringmpqGuyH = "QsfW88VHE5s9EfDNr8rzepOTuUd8V24a3SMeWkBxjBejIcPGgG3lXECk4pXFu7IcePxRW7vIBONXxOoAwVcd"
		const string5MkNGh = "635fSGVKaem8ViwEomqWrloeSV0LnkwBd0GzuKiObm"
		const uintvZqugSb = BigInt("249")
		const NasiLiquidityPoolFactoryuBcHVD0 = await NasiLiquidityPoolFactory.new(stringmpqGuyH, string5MkNGh, uintvZqugSb, {from: accounts[5]});
		const uintcM4TD2M = BigInt("1665")
		const addressHX9O2DU = accounts[1]
		const addressE7bH6NS = accounts[5]
		const uint7xjy3e = BigInt("306")
		const addressgrGb7ke = accounts[2]
		const boolrrR8BqJ = await NasiLiquidityPoolFactoryuBcHVD0.transferFrom.call(addressE7bH6NS, addressHX9O2DU, uintcM4TD2M, {from: accounts[2]});
		const boolXV2WBmm = await NasiLiquidityPoolFactoryuBcHVD0.increaseAllowance.call(addressgrGb7ke, uint7xjy3e, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringxdHc1WC = "uwk7grDKrc9yIYf"
		const stringuZx7OZh = "DYqNcFQjmK3tsNn81FxyyBtbVHSQrlrhQ8KeJ"
		const uintcV5EcyJ = BigInt("89")
		const NasiLiquidityPoolFactoryfEGOp4q = await NasiLiquidityPoolFactory.new(stringxdHc1WC, stringuZx7OZh, uintcV5EcyJ, {from: accounts[5]});
		const addressMHyMA39 = accounts[2]
		const uintDuAVoOv = BigInt("541")
		const uintxIbkRst = BigInt("969")
		const uint2567JHqDw = await NasiLiquidityPoolFactoryfEGOp4q.getCurrentVotes.call(addressMHyMA39, {from: accounts[0]});
		await NasiLiquidityPoolFactoryfEGOp4q.unpause.call({from: accounts[3]});
		await NasiLiquidityPoolFactoryfEGOp4q.pause.call({from: accounts[5]});
		await NasiLiquidityPoolFactoryfEGOp4q.whenPaused.call({from: accounts[2]});
		const uint256l2HXFPI = await NasiLiquidityPoolFactoryfEGOp4q.deposit.call(uintxIbkRst, uintDuAVoOv, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressk8DsPv = accounts[1]
		const addressqZhxPBz = accounts[0]
		const uintv0RgvfZ = BigInt("1976")
		const uintpi3zUV5 = BigInt("492")
		const NasiLiquidityPoolFactoryVuZGGda = await NasiLiquidityPoolFactory.new(addressk8DsPv, addressqZhxPBz, uintv0RgvfZ, uintpi3zUV5, {from: accounts[0]});
		const addresszf3OiA = accounts[4]
		await NasiLiquidityPoolFactoryVuZGGda.massUpdatePools.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256RZcefhx = await NasiLiquidityPoolFactoryVuZGGda.balanceOf.call(addresszf3OiA, {from: accounts[1]});
		await NasiLiquidityPoolFactoryVuZGGda.whenPaused.call({from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringJCU9v9Y = "YryzkkOetnSNNqTL"
		const stringdrm5MIf = "wPpQGFABjfLIxk7tCVbm577a"
		const uintoiMYFr = BigInt("35")
		const NasiLiquidityPoolFactoryHFlEYC7 = await NasiLiquidityPoolFactory.new(stringJCU9v9Y, stringdrm5MIf, uintoiMYFr, {from: accounts[1]});
		const addressdiAjxTq = "0x0000000000000000000000000000000000000001"
		const uintlYPtZeS = BigInt("412")
		const addressOkILJ3 = "0x0000000000000000000000000000000000000001"
		const uintDzwE4qJ = BigInt("1027")
		const uintYd9QbRX = BigInt("1444")
		const uintUq4QGgl = BigInt("1270")
		const addressNCeoT1C = accounts[1]
		const uint256WiwoIYH = await NasiLiquidityPoolFactoryHFlEYC7.pendingNasi.call(uintlYPtZeS, addressdiAjxTq, {from: accounts[1]});
		const addressiIvynD7 = await NasiLiquidityPoolFactoryHFlEYC7.delegates.call(addressOkILJ3, {from: accounts[4]});
		const 
q0psLt5 = await NasiLiquidityPoolFactoryHFlEYC7._writeCheckpoint.call(addressNCeoT1C, uintUq4QGgl, uintYd9QbRX, uintDzwE4qJ, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringJo3E2k = "3snLUbycNdrV6bbEPRTNlExxMyuheVtfoMTmiSU2MgQ4J"
		const stringKtWJA3I = "Y2WR4IwUBRgDunmYigY8L7r7kW4Cm"
		const uint3v3TPy = BigInt("48")
		const NasiLiquidityPoolFactoryn5YVpnQ = await NasiLiquidityPoolFactory.new(stringJo3E2k, stringKtWJA3I, uint3v3TPy, {from: accounts[1]});
		const uint8BWde5 = BigInt("489")
		const addressWQKhIW4 = accounts[3]
		await NasiLiquidityPoolFactoryn5YVpnQ.massUpdatePools.call({from: accounts[4]});
		await NasiLiquidityPoolFactoryn5YVpnQ.whenPaused.call({from: accounts[1]});
		await NasiLiquidityPoolFactoryn5YVpnQ.renounceOwnership.call({from: accounts[3]});
		const boolLSMuIPN = await NasiLiquidityPoolFactoryn5YVpnQ.approve.call(addressWQKhIW4, uint8BWde5, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addresspvI7GSW = accounts[2]
		const addressN2bAsqB = accounts[4]
		const uintOG20Cts = BigInt("755")
		const uintwysehK2 = BigInt("45")
		const NasiLiquidityPoolFactoryiqB5wB4 = await NasiLiquidityPoolFactory.new(addresspvI7GSW, addressN2bAsqB, uintOG20Cts, uintwysehK2, {from: accounts[1]});
		const addressS3BEFqW = await NasiLiquidityPoolFactoryiqB5wB4.owner.call({from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressx5feuyO = accounts[2]
		const addressNXlFIqR = accounts[1]
		const uintCIzJseh = BigInt("383")
		const uintwt05TKq = BigInt("870")
		const NasiLiquidityPoolFactoryf4d8lXP = await NasiLiquidityPoolFactory.new(addressx5feuyO, addressNXlFIqR, uintCIzJseh, uintwt05TKq, {from: accounts[5]});
		const uintthEm7GS = BigInt("787")
		const uintzgYMsLd = BigInt("1307")
		const uintcYG4J60 = BigInt("1756")
		const uintsPY6l6N = BigInt("1367")
		const uint256pGmJuLR = await NasiLiquidityPoolFactoryf4d8lXP.withdraw.call(uintzgYMsLd, uintthEm7GS, {from: accounts[0]});
		const uint256x4HEJV = await NasiLiquidityPoolFactoryf4d8lXP.migrate.call(uintcYG4J60, {from: accounts[1]});
		const stringqKDRmB = await NasiLiquidityPoolFactoryf4d8lXP.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		await NasiLiquidityPoolFactoryf4d8lXP.renounceOwnership.call({from: accounts[3]});
		const uint256HdwxCkz = await NasiLiquidityPoolFactoryf4d8lXP.updatePool.call(uintsPY6l6N, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringuysSoMe = "VW90DGohaaenAjdtG05Fm"
		const stringBytaPUL = "WLPCRsGzacUmI7319xuqWj4lWDTBi7U2LBj"
		const uintAiAhq0 = BigInt("147")
		const NasiLiquidityPoolFactoryFbTyWe3 = await NasiLiquidityPoolFactory.new(stringuysSoMe, stringBytaPUL, uintAiAhq0, {from: accounts[4]});
		const uintdK4tTET = BigInt("2030")
		const uintQCp7sc = BigInt("230")
		const addressdPGRgKW = "0x0000000000000000000000000000000000000001"
		const uintDksbo1u = BigInt("1860")
		const uint256nR5OwQ = await NasiLiquidityPoolFactoryFbTyWe3.updatePool.call(uintdK4tTET, {from: accounts[3]});
		const uint256D8xY8ze = await NasiLiquidityPoolFactoryFbTyWe3.enterStaking.call(uintQCp7sc, {from: accounts[1]});
		const addressscC6i79 = await NasiLiquidityPoolFactoryFbTyWe3.delegate.call(addressdPGRgKW, {from: accounts[0]});
		const uint256C82qdFC = await NasiLiquidityPoolFactoryFbTyWe3.leaveStaking.call(uintDksbo1u, {from: accounts[2]});
		const boolyrjBtx4 = await NasiLiquidityPoolFactoryFbTyWe3.paused.call({from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressNuVGW4C = accounts[3]
		const addresssHFOhpz = accounts[5]
		const uintX0D2X3x = BigInt("237")
		const uintdOc1BcO = BigInt("1300")
		const NasiLiquidityPoolFactoryVjKjwuS = await NasiLiquidityPoolFactory.new(addressNuVGW4C, addresssHFOhpz, uintX0D2X3x, uintdOc1BcO, {from: accounts[3]});
		const uintWSqkpk6 = BigInt("1227")
		const uintZBY8kcp = BigInt("1784")
		const uintko7jaD2 = BigInt("487")
		const uintsqi4ruG = BigInt("1445")
		const addresslhp4FM = accounts[1]
		const uinteQNMkH3 = BigInt("1170")
		const addressy70dCb = accounts[1]
		const uint256F6IOpbT = await NasiLiquidityPoolFactoryVjKjwuS.enterStaking.call(uintWSqkpk6, {from: accounts[3]});
		const uint256W0f5l6e = await NasiLiquidityPoolFactoryVjKjwuS.withdraw.call(uintko7jaD2, uintZBY8kcp, {from: accounts[5]});
		const uint256qkH9LB = await NasiLiquidityPoolFactoryVjKjwuS.getPriorVotes.call(addresslhp4FM, uintsqi4ruG, {from: "0x0000000000000000000000000000000000000001"});
		const uint8mATLrUi = await NasiLiquidityPoolFactoryVjKjwuS.decimals.call({from: accounts[3]});
		const addressGU0qwg5 = await NasiLiquidityPoolFactoryVjKjwuS.burnFrom.call(addressy70dCb, uinteQNMkH3, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringwsMhB5 = "KrK3gJb4o0XGNFVTUWaZ1posUVhB5s4LjIHrqmEL6z5lup2syCTE1EmJ9PErHskbFJzVCxuEYxqfWa7QqGWnJiKXpuUNEUA"
		const stringqm2w8wt = "z26ef7BtoWup9sD7q1rjQS9uCBm2P8wDyl1AcMzEfTUjrJgmljrPTCo8N2oUgsuFC39PJyy9IRqGAj4yd5"
		const uintP0Mrik = BigInt("62")
		const NasiLiquidityPoolFactoryhqKpb0h = await NasiLiquidityPoolFactory.new(stringwsMhB5, stringqm2w8wt, uintP0Mrik, {from: accounts[4]});
		const addressmPDR8be = "0x0000000000000000000000000000000000000001"
		const uintQQ2OqIB = BigInt("1841")
		const addressFCj5h3d = accounts[3]
		const uintqCsgB3H = BigInt("556")
		const addressL7PiU0 = accounts[1]
		const boolSJ3j0DW = await NasiLiquidityPoolFactoryhqKpb0h.isPauser.call(addressmPDR8be, {from: accounts[5]});
		await NasiLiquidityPoolFactoryhqKpb0h.pause.call({from: accounts[2]});
		const booltKV2VZv = await NasiLiquidityPoolFactoryhqKpb0h.decreaseAllowance.call(addressFCj5h3d, uintQQ2OqIB, {from: accounts[0]});
		const boolTsXTiHD = await NasiLiquidityPoolFactoryhqKpb0h.mint.call(addressL7PiU0, uintqCsgB3H, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressv5YrOn2 = accounts[3]
		const addressEcf3thj = accounts[5]
		const uintvKIfmJj = BigInt("237")
		const uintBjzSDQy = BigInt("1300")
		const NasiLiquidityPoolFactoryVjKjwuS = await NasiLiquidityPoolFactory.new(addressv5YrOn2, addressEcf3thj, uintvKIfmJj, uintBjzSDQy, {from: accounts[3]});
		const uintcLofTWd = BigInt("1626")
		const uintSDTslo = BigInt("1097")
		const uintwvB0bF9 = BigInt("1227")
		const uintz1pggdX = BigInt("315")
		const bytefbwjFp7 = "0x13080b130f140c0420051917030e10110311190a1d101f001a1815120c03180e"
		const bytetmh33Xq = "0x121d091a130c0e1715091e031614161e18010f04081c1711001d041f0c0e0f09"
		const uintq27Ot5g = BigInt("31")
		const uinthcu9kGg = BigInt("1531")
		const uintehl4SfI = BigInt("1860")
		const addressWgl3F0v = accounts[4]
		const addressu08b0EZ = accounts[0]
		const uintuw2RR3 = BigInt("1170")
		const addressYyc76r = accounts[1]
		const uint256BLy0hF = await NasiLiquidityPoolFactoryVjKjwuS.deposit.call(uintSDTslo, uintcLofTWd, {from: accounts[3]});
		const uint256F6IOpbT = await NasiLiquidityPoolFactoryVjKjwuS.enterStaking.call(uintwvB0bF9, {from: accounts[3]});
		const uint256oJyFiNb = await NasiLiquidityPoolFactoryVjKjwuS.enterStaking.call(uintz1pggdX, {from: accounts[1]});
		const 
WDNi1C5 = await NasiLiquidityPoolFactoryVjKjwuS.delegateBySig.call(addressWgl3F0v, uintehl4SfI, uinthcu9kGg, uintq27Ot5g, bytetmh33Xq, bytefbwjFp7, {from: accounts[0]});
		const uint8mATLrUi = await NasiLiquidityPoolFactoryVjKjwuS.decimals.call({from: accounts[3]});
		const addressc4zVQ8 = await NasiLiquidityPoolFactoryVjKjwuS.delegate.call(addressu08b0EZ, {from: accounts[3]});
		const addressGU0qwg5 = await NasiLiquidityPoolFactoryVjKjwuS.burnFrom.call(addressYyc76r, uintuw2RR3, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressGWL6zAB = accounts[4]
		const addressXWdigM2 = "0x0000000000000000000000000000000000000001"
		const uintMaLdPHV = BigInt("537")
		const uinttEAGPx8 = BigInt("1023")
		const NasiLiquidityPoolFactoryYxNZUz6 = await NasiLiquidityPoolFactory.new(addressGWL6zAB, addressXWdigM2, uintMaLdPHV, uinttEAGPx8, {from: accounts[4]});
		const uintAHA22Ic = BigInt("1618")
		const uintTUSOnOU = BigInt("1425")
		const addressixPQSUd = accounts[0]
		const address3tJrDT = accounts[3]
		const uint256hzZbstw = await NasiLiquidityPoolFactoryYxNZUz6.getBonusMultiplier.call(uintTUSOnOU, uintAHA22Ic, {from: "0x0000000000000000000000000000000000000001"});
		const addresspHTWJhp = await NasiLiquidityPoolFactoryYxNZUz6.delegate.call(addressixPQSUd, {from: accounts[3]});
		await NasiLiquidityPoolFactoryYxNZUz6.onlyPauser.call({from: accounts[1]});
		const addressp5SVhiK = await NasiLiquidityPoolFactoryYxNZUz6.delegate.call(address3tJrDT, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringx9w5que = "oiHug2x"
		const stringnyrPKrH = "ddk5BfjuPXVrx9uSMwTxGGstYNpeu9zf3ATiJmn8"
		const uintKYffExC = BigInt("79")
		const NasiLiquidityPoolFactoryx6mdglu = await NasiLiquidityPoolFactory.new(stringx9w5que, stringnyrPKrH, uintKYffExC, {from: accounts[2]});
		const uintcFHpbGu = BigInt("86")
		const addressaip8SY2 = accounts[2]
		const uintL8yZ7x3 = BigInt("947")
		const addressXB2dmoQ = accounts[2]
		const addresshNMB6F = accounts[3]
		const boolbQjp8Ma = await NasiLiquidityPoolFactoryx6mdglu.paused.call({from: accounts[5]});
		const boolQVXxVL8 = await NasiLiquidityPoolFactoryx6mdglu.approve.call(addressaip8SY2, uintcFHpbGu, {from: accounts[1]});
		await NasiLiquidityPoolFactoryx6mdglu.renounceMinter.call({from: accounts[4]});
		const uint256ICG9Ii = await NasiLiquidityPoolFactoryx6mdglu.leaveStaking.call(uintL8yZ7x3, {from: accounts[1]});
		const addressCwms9a = await NasiLiquidityPoolFactoryx6mdglu._delegate.call(addresshNMB6F, addressXB2dmoQ, {from: accounts[4]});
	});
})