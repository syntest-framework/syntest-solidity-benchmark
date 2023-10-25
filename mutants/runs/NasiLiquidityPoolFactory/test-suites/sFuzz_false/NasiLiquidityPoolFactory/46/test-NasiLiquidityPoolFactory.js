const NasiLiquidityPoolFactory = artifacts.require("NasiLiquidityPoolFactory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NasiLiquidityPoolFactory', (accounts) => {
	it('test for NasiLiquidityPoolFactory', async () => {
		const addressTPxfxx = accounts[1]
		const addressIay89Of = accounts[2]
		const uintmxHeF9U = BigInt("1683")
		const uintrDffWV6 = BigInt("1649")
		const NasiLiquidityPoolFactoryFPXeaSf = await NasiLiquidityPoolFactory.new(addressTPxfxx, addressIay89Of, uintmxHeF9U, uintrDffWV6, {from: accounts[4]});
		const addressrdxHq5b = accounts[4]
		const addressm0dFFz3 = await NasiLiquidityPoolFactoryFPXeaSf.addPauser.call(addressrdxHq5b, {from: accounts[5]});
		const uint8tU2tNbQ = await NasiLiquidityPoolFactoryFPXeaSf.decimals.call({from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringglaZC9f = "UDYirybzO3aCmMCSMWhHeCYsRxtqEK8NUkuYgS63Pu7K4QBNGtLZglONzpU"
		const stringRqxowyp = "soWRrW2NvUfnDfWlschgQPnkisgTxISXOrPRbwkorGFRrAyMgFFJCaici"
		const uintwGd9Upi = BigInt("132")
		const NasiLiquidityPoolFactoryJUgxI1 = await NasiLiquidityPoolFactory.new(stringglaZC9f, stringRqxowyp, uintwGd9Upi, {from: accounts[5]});
		const addressvZ4PIl = accounts[2]
		const uintRDm2pFT = BigInt("540")
		const addressaQHzeWG = accounts[1]
		const addressYFRrImJ = accounts[3]
		const addressDrYwBH6 = "0x0000000000000000000000000000000000000001"
		const addressqBqrsMu = accounts[1]
		const boolz4Aaz63 = await NasiLiquidityPoolFactoryJUgxI1.isPauser.call(addressvZ4PIl, {from: accounts[1]});
		const boolpEQ7gC = await NasiLiquidityPoolFactoryJUgxI1.decreaseAllowance.call(addressaQHzeWG, uintRDm2pFT, {from: accounts[4]});
		const uint256Atvtlur = await NasiLiquidityPoolFactoryJUgxI1.totalSupply.call({from: accounts[1]});
		const uint256DTZQIrP = await NasiLiquidityPoolFactoryJUgxI1.getCurrentVotes.call(addressYFRrImJ, {from: accounts[4]});
		await NasiLiquidityPoolFactoryJUgxI1.pause.call({from: "0x0000000000000000000000000000000000000001"});
		const addressmbA1VA = await NasiLiquidityPoolFactoryJUgxI1._delegate.call(addressqBqrsMu, addressDrYwBH6, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringubsbLS3 = "2B7swSeh4T1psjxnfIErYHeiOj68pa14GJHsSQMIv6cMa88tAoxztedE2l3dc6qcvPq6zx9d"
		const stringARLgJTQ = "47bpHh7pKM5rRUetqRB5OlzXraykqAyNwsA2ivkDsGhjKsU7cGYRaUVGRe1bLlGsmC2Okjvq7eW"
		const uintjDSdjM2 = BigInt("175")
		const NasiLiquidityPoolFactoryEvWHk2X = await NasiLiquidityPoolFactory.new(stringubsbLS3, stringARLgJTQ, uintjDSdjM2, {from: accounts[2]});
		const uintWtxD1NT = BigInt("1924")
		const addressXHlcPdv = accounts[2]
		const uintxXy8k7 = BigInt("1940")
		const uintmxmFyAo = BigInt("1248")
		const addressxMuBdhk = accounts[4]
		const addressqr1Fuz = accounts[1]
		const bytex1taAPN = "0x0e1e0f141011181108061e16181b0e1906110a19171500170a0b131e06141217"
		const byteNGpK00E = "0x1f0d1a1f100b15180e1f051d0f070a06180b0b1e0d1d10130b03041c1e171a16"
		const uintSkI0uiT = BigInt("204")
		const uintjWsyKmr = BigInt("1034")
		const uintvTwAMz = BigInt("838")
		const addressfckEIvf = accounts[0]
		const bool6j1fwp = await NasiLiquidityPoolFactoryEvWHk2X.increaseAllowance.call(addressXHlcPdv, uintWtxD1NT, {from: accounts[3]});
		const uint256JG6LgLh = await NasiLiquidityPoolFactoryEvWHk2X.withdraw.call(uintmxmFyAo, uintxXy8k7, {from: accounts[0]});
		const addressRw7fV0g = await NasiLiquidityPoolFactoryEvWHk2X.transferOwnership.call(addressxMuBdhk, {from: accounts[1]});
		const addressS4yGyUR = await NasiLiquidityPoolFactoryEvWHk2X.setMigrator.call(addressqr1Fuz, {from: accounts[4]});
		const 
jBUjPN7 = await NasiLiquidityPoolFactoryEvWHk2X.delegateBySig.call(addressfckEIvf, uintvTwAMz, uintjWsyKmr, uintSkI0uiT, byteNGpK00E, bytex1taAPN, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressYc92oli = accounts[0]
		const addressAsfbNF = accounts[2]
		const uinti8BZD27 = BigInt("1505")
		const uinthtOKSca = BigInt("520")
		const NasiLiquidityPoolFactoryg9pg3jg = await NasiLiquidityPoolFactory.new(addressYc92oli, addressAsfbNF, uinti8BZD27, uinthtOKSca, {from: accounts[3]});
		const uintlc7a3Wj = BigInt("1249")
		const uintqur3Jo4 = BigInt("182")
		const addressOhvCk2p = accounts[3]
		const addressHYzk2LE = accounts[2]
		const uint256euijKzg = await NasiLiquidityPoolFactoryg9pg3jg.enterStaking.call(uintlc7a3Wj, {from: accounts[3]});
		const boolz4odzSR = await NasiLiquidityPoolFactoryg9pg3jg.transfer.call(addressOhvCk2p, uintqur3Jo4, {from: accounts[2]});
		const uint256JuxMmIq = await NasiLiquidityPoolFactoryg9pg3jg.getCurrentVotes.call(addressHYzk2LE, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringpqa9Hej = "Uhj2wA3MC6QXiS"
		const stringTHxg0qO = "UMhhIz6g8iwEkLI"
		const uintc5E5O8 = BigInt("215")
		const NasiLiquidityPoolFactoryXcrBpXL = await NasiLiquidityPoolFactory.new(stringpqa9Hej, stringTHxg0qO, uintc5E5O8, {from: accounts[0]});
		const uintjF9UsEw = BigInt("2008")
		const addressTf9nJSt = accounts[5]
		await NasiLiquidityPoolFactoryXcrBpXL.renounceMinter.call({from: accounts[2]});
		const uint256rAm3PMk = await NasiLiquidityPoolFactoryXcrBpXL.getPriorVotes.call(addressTf9nJSt, uintjF9UsEw, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressB9MkEiG = accounts[0]
		const addressL67IwIX = accounts[1]
		const uintpK6lH4K = BigInt("691")
		const uintmzmtZwV = BigInt("1718")
		const NasiLiquidityPoolFactoryJzPG7jz = await NasiLiquidityPoolFactory.new(addressB9MkEiG, addressL67IwIX, uintpK6lH4K, uintmzmtZwV, {from: accounts[3]});
		const boolSJFugav = false
		const addressICH7GAJ = accounts[0]
		const uintCUmczNj = BigInt("1271")
		const uintMeFzYu2 = BigInt("1176")
		const uintBS9rYkS = BigInt("141")
		const uintc3yL61D = BigInt("454")
		const uintV3AakW = BigInt("801")
		const address6EQtRt = accounts[4]
		const uint256N88OIno = await NasiLiquidityPoolFactoryJzPG7jz.addLpToken.call(uintCUmczNj, addressICH7GAJ, boolSJFugav, {from: accounts[2]});
		const uint256dSi7OrK = await NasiLiquidityPoolFactoryJzPG7jz.enterStaking.call(uintMeFzYu2, {from: accounts[2]});
		await NasiLiquidityPoolFactoryJzPG7jz.whenNotPaused.call({from: accounts[0]});
		const 
eheqAMx = await NasiLiquidityPoolFactoryJzPG7jz._writeCheckpoint.call(address6EQtRt, uintV3AakW, uintc3yL61D, uintBS9rYkS, {from: accounts[4]});
		await NasiLiquidityPoolFactoryJzPG7jz.onlyPauser.call({from: accounts[3]});
		const uint256PXAClQK = await NasiLiquidityPoolFactoryJzPG7jz.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringkVWAZrc = "kWeaoi1lMq84eLARVGvhO7UJCb8nXNAixtQCpDy56ufJN8rE4SYaNPUib"
		const string2V9rkN = "FtgBogUA0VyHapss9nhlTdfZ3zaA48pHMNpqBMQoQPyhE8FqhEai"
		const uintvbgEDeF = BigInt("158")
		const NasiLiquidityPoolFactoryZ8FFntc = await NasiLiquidityPoolFactory.new(stringkVWAZrc, string2V9rkN, uintvbgEDeF, {from: accounts[5]});
		const uintslfXnx4 = BigInt("680")
		const uintC8xHQcG = BigInt("47")
		const uintKaj8biY = BigInt("1297")
		const addressTtwuR3 = accounts[0]
		const uintxkFZsER = BigInt("1460")
		await NasiLiquidityPoolFactoryZ8FFntc.renounceOwnership.call({from: accounts[2]});
		const uint256bcgwuuN = await NasiLiquidityPoolFactoryZ8FFntc.withdraw.call(uintC8xHQcG, uintslfXnx4, {from: accounts[2]});
		const uint256tcCmDaE = await NasiLiquidityPoolFactoryZ8FFntc.enterStaking.call(uintKaj8biY, {from: accounts[3]});
		const uint256Y6s3MEJ = await NasiLiquidityPoolFactoryZ8FFntc.pendingNasi.call(uintxkFZsER, addressTtwuR3, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressaqHxpY = accounts[4]
		const address2835gB = accounts[1]
		const uintBsxoya = BigInt("743")
		const uintQ1HNbFp = BigInt("1522")
		const NasiLiquidityPoolFactoryQSnZ5Pk = await NasiLiquidityPoolFactory.new(addressaqHxpY, address2835gB, uintBsxoya, uintQ1HNbFp, {from: accounts[1]});
		const uintdkBsUy = BigInt("1685")
		const addressBO9yqEV = accounts[0]
		const uintN9vOv6U = BigInt("1910")
		const addressOWyXWbW = accounts[4]
		const addresslxEzo0p = accounts[5]
		const uintydQyCxh = BigInt("1829")
		const uint256gVg36sL = await NasiLiquidityPoolFactoryQSnZ5Pk.migrate.call(uintdkBsUy, {from: accounts[4]});
		const addressjKxgwWn = await NasiLiquidityPoolFactoryQSnZ5Pk.addPauser.call(addressBO9yqEV, {from: accounts[1]});
		const boolTI17aM = await NasiLiquidityPoolFactoryQSnZ5Pk.transfer.call(addressOWyXWbW, uintN9vOv6U, {from: accounts[4]});
		const addressql8Rkg = await NasiLiquidityPoolFactoryQSnZ5Pk.addMinter.call(addresslxEzo0p, {from: accounts[0]});
		const uint256TNaaIZ = await NasiLiquidityPoolFactoryQSnZ5Pk.leaveStaking.call(uintydQyCxh, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const address2jK01q = accounts[1]
		const addressCJC9Fw = accounts[2]
		const uintxJkhGbJ = BigInt("1683")
		const uintBk0v3lU = BigInt("1649")
		const NasiLiquidityPoolFactoryFPXeaSf = await NasiLiquidityPoolFactory.new(address2jK01q, addressCJC9Fw, uintxJkhGbJ, uintBk0v3lU, {from: accounts[4]});
		const uintwdno03v = BigInt("404")
		const uintB4nhSzU = BigInt("974")
		const uintdYFb900 = BigInt("1501")
		const addressyqnTKlr = accounts[1]
		const addressYDRQchN = accounts[5]
		const uint256qp8JRlm = await NasiLiquidityPoolFactoryFPXeaSf.deposit.call(uintB4nhSzU, uintwdno03v, {from: accounts[0]});
		const boolQIOSrxn = await NasiLiquidityPoolFactoryFPXeaSf.transfer.call(addressyqnTKlr, uintdYFb900, {from: accounts[0]});
		const addressm0dFFz3 = await NasiLiquidityPoolFactoryFPXeaSf.addPauser.call(addressYDRQchN, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringN9bhH5i = "cpLnNknwaVvJCz9yjBHEN99E8j2QN7yRKzwET8sWjFcqDIFWFtFXOxEhhTFDxkh"
		const stringV9GR6v1 = "3MYtygPpIAHKtNeu4lcsdfl7nB9eOlLz2dcOdiLEOE"
		const uintCebV7sb = BigInt("125")
		const NasiLiquidityPoolFactoryy2LiEz0 = await NasiLiquidityPoolFactory.new(stringN9bhH5i, stringV9GR6v1, uintCebV7sb, {from: accounts[0]});
		const stringT0Fnz3R = await NasiLiquidityPoolFactoryy2LiEz0.name.call({from: accounts[2]});
		await NasiLiquidityPoolFactoryy2LiEz0.renouncePauser.call({from: accounts[3]});
		await NasiLiquidityPoolFactoryy2LiEz0.whenNotPaused.call({from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringDaKAUm = "ap"
		const stringDyY1J5O = "Mt5FuWwl7cnq36pSAhx4SDaYLaF3muJvsE4B2ymMXaNd5kCIF"
		const uintTHCAtLj = BigInt("121")
		const NasiLiquidityPoolFactoryl2lM1nB = await NasiLiquidityPoolFactory.new(stringDaKAUm, stringDyY1J5O, uintTHCAtLj, {from: accounts[5]});
		const uintLvSmI1n = BigInt("1140")
		const uintkF48yqg = BigInt("741")
		const addressz7ZNbj2 = accounts[5]
		const uintTIYrJvU = BigInt("1164")
		const addressZqG5cJx = accounts[3]
		const uintZS2RvNM = BigInt("1146")
		const addresss7JeHyf = accounts[5]
		const uint256tP6n8F7 = await NasiLiquidityPoolFactoryl2lM1nB.leaveStaking.call(uintLvSmI1n, {from: accounts[0]});
		const boolV0QJTqm = await NasiLiquidityPoolFactoryl2lM1nB.approve.call(addressz7ZNbj2, uintkF48yqg, {from: "0x0000000000000000000000000000000000000001"});
		const boolCvPWadE = await NasiLiquidityPoolFactoryl2lM1nB.mint.call(addressZqG5cJx, uintTIYrJvU, {from: accounts[5]});
		const booluEMslKm = await NasiLiquidityPoolFactoryl2lM1nB.increaseAllowance.call(addresss7JeHyf, uintZS2RvNM, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringhrdKCbD = "CoYvSxHdhdVveUN3mOX5"
		const stringukP39Wo = "ZQXCx28ECWgAnVg1aKKh5Q"
		const uintQ2Oz4Wl = BigInt("58")
		const NasiLiquidityPoolFactorylZitSc0 = await NasiLiquidityPoolFactory.new(stringhrdKCbD, stringukP39Wo, uintQ2Oz4Wl, {from: accounts[0]});
		const bytetJnxqyH = "0x1f0915160e1c1815090518130e141f0f12051b201613160d1902021f00150104"
		const byteZSafnqK = "0x0f1507080b091706011401201717140a110f09050b120e1114071b091d12080c"
		const uintkaRmDWo = BigInt("19")
		const uinthKXOWv = BigInt("709")
		const uintTFWcnk6 = BigInt("1451")
		const addressDT3J1p = "0x0000000000000000000000000000000000000001"
		const uintZKeRk8 = BigInt("1862")
		const addressg009D1q = accounts[3]
		const addressOR8NNFC = accounts[2]
		const uintLeFkdD = BigInt("1265")
		const addresskW3IxQp = accounts[4]
		const 
EGNv3J = await NasiLiquidityPoolFactorylZitSc0.delegateBySig.call(addressDT3J1p, uintTFWcnk6, uinthKXOWv, uintkaRmDWo, byteZSafnqK, bytetJnxqyH, {from: accounts[3]});
		const boolIXDG6iT = await NasiLiquidityPoolFactorylZitSc0.transferFrom.call(addressOR8NNFC, addressg009D1q, uintZKeRk8, {from: accounts[4]});
		const boolgHRhjgw = await NasiLiquidityPoolFactorylZitSc0.decreaseAllowance.call(addresskW3IxQp, uintLeFkdD, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressKh4vOtJ = accounts[2]
		const addresslNjIwNW = accounts[0]
		const uintYKJtvS4 = BigInt("1860")
		const uintyRvWY2y = BigInt("500")
		const NasiLiquidityPoolFactoryCsfw4Oi = await NasiLiquidityPoolFactory.new(addressKh4vOtJ, addresslNjIwNW, uintYKJtvS4, uintyRvWY2y, {from: accounts[0]});
		const uintTDEui2H = BigInt("1662")
		const addressG7pjJwp = accounts[0]
		await NasiLiquidityPoolFactoryCsfw4Oi.massUpdatePools.call({from: accounts[3]});
		const bool6V3j3i = await NasiLiquidityPoolFactoryCsfw4Oi.increaseAllowance.call(addressG7pjJwp, uintTDEui2H, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addresszj79zPj = accounts[1]
		const addresshrqB6lg = accounts[2]
		const uintE2nXekj = BigInt("1683")
		const uintYuRrOfC = BigInt("1649")
		const NasiLiquidityPoolFactoryFPXeaSf = await NasiLiquidityPoolFactory.new(addresszj79zPj, addresshrqB6lg, uintE2nXekj, uintYuRrOfC, {from: accounts[4]});
		const uintPwT1i4T = BigInt("373")
		const uintHkcql6 = BigInt("840")
		const addressLgaddGL = accounts[2]
		const uint256BoXH9Z = await NasiLiquidityPoolFactoryFPXeaSf.emergencyWithdraw.call(uintPwT1i4T, {from: accounts[3]});
		const addressgBBDYWM = await NasiLiquidityPoolFactoryFPXeaSf.burnFrom.call(addressLgaddGL, uintHkcql6, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const string9TyFhe = "lUQffRrXclk"
		const stringMmBUTN = "khauJ"
		const uintggAvBTW = BigInt("196")
		const NasiLiquidityPoolFactoryJChwiAF = await NasiLiquidityPoolFactory.new(string9TyFhe, stringMmBUTN, uintggAvBTW, {from: accounts[3]});
		const boolyWieDqD = true
		const uintIUpb78D = BigInt("1355")
		const uintFiOh1S0 = BigInt("1501")
		const uintPPyPnUL = BigInt("980")
		const addressYZBhXZ = accounts[0]
		const addressu321o6T = accounts[4]
		const uint256VG4AnDZ = await NasiLiquidityPoolFactoryJChwiAF.setAllocationPoint.call(uintFiOh1S0, uintIUpb78D, boolyWieDqD, {from: accounts[0]});
		const boolflyekca = await NasiLiquidityPoolFactoryJChwiAF.decreaseAllowance.call(addressYZBhXZ, uintPPyPnUL, {from: accounts[1]});
		const addressdj7Ejmm = await NasiLiquidityPoolFactoryJChwiAF.transferOwnership.call(addressu321o6T, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringpHshYn3 = "nneE1JKzPYF7jaF6zHMSflaCVPfamN"
		const stringfIfF3PC = "Ydtal1MOH4WEpPOU"
		const uintfQxJ4lm = BigInt("153")
		const NasiLiquidityPoolFactoryfXoy7wU = await NasiLiquidityPoolFactory.new(stringpHshYn3, stringfIfF3PC, uintfQxJ4lm, {from: accounts[5]});
		const addressiEjdF0A = accounts[2]
		const addressedmvYiH = accounts[2]
		const addresskDviIJ5 = accounts[4]
		const uintCoziRh = BigInt("1608")
		const addressecK5l9Y = accounts[1]
		await NasiLiquidityPoolFactoryfXoy7wU.renounceMinter.call({from: accounts[3]});
		const addressLImIem2 = await NasiLiquidityPoolFactoryfXoy7wU._delegate.call(addressedmvYiH, addressiEjdF0A, {from: accounts[2]});
		await NasiLiquidityPoolFactoryfXoy7wU.onlyMinter.call({from: accounts[0]});
		const addressKo4aVDC = await NasiLiquidityPoolFactoryfXoy7wU.transferOwnership.call(addresskDviIJ5, {from: accounts[1]});
		const boolqVzTjmn = await NasiLiquidityPoolFactoryfXoy7wU.transfer.call(addressecK5l9Y, uintCoziRh, {from: accounts[1]});
		await NasiLiquidityPoolFactoryfXoy7wU.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressbDL2NEk = accounts[1]
		const addressBWhOl7c = accounts[2]
		const uintEU5nnB = BigInt("1683")
		const uintmZvXZO = BigInt("1649")
		const NasiLiquidityPoolFactoryFPXeaSf = await NasiLiquidityPoolFactory.new(addressbDL2NEk, addressBWhOl7c, uintEU5nnB, uintmZvXZO, {from: accounts[4]});
		const uintNUjcrur = BigInt("1873")
		const uintrOsjyLy = BigInt("1217")
		const addressiptXJIq = accounts[6]
		const uint256DVJn8c0 = await NasiLiquidityPoolFactoryFPXeaSf.withdraw.call(uintrOsjyLy, uintNUjcrur, {from: accounts[0]});
		const addressm0dFFz3 = await NasiLiquidityPoolFactoryFPXeaSf.addPauser.call(addressiptXJIq, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressBNaSJcc = accounts[3]
		const address8ppZd0 = "0x0000000000000000000000000000000000000001"
		const uintg3et4k3 = BigInt("670")
		const uintWFWIBOW = BigInt("1147")
		const NasiLiquidityPoolFactoryPHVWRIx = await NasiLiquidityPoolFactory.new(addressBNaSJcc, address8ppZd0, uintg3et4k3, uintWFWIBOW, {from: "0x0000000000000000000000000000000000000001"});
		const uintSr7Frur = BigInt("2017")
		const addressCgtaP8y = "0x0000000000000000000000000000000000000001"
		const uintOMlCCmo = BigInt("105")
		const addressQ2KUHoH = accounts[0]
		const bool2cTieG = await NasiLiquidityPoolFactoryPHVWRIx.approve.call(addressCgtaP8y, uintSr7Frur, {from: accounts[2]});
		const boolBeeP5xv = await NasiLiquidityPoolFactoryPHVWRIx.approve.call(addressQ2KUHoH, uintOMlCCmo, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addresswSLGpTU = accounts[1]
		const addresszpSICHA = accounts[2]
		const uintxEBkPwE = BigInt("1683")
		const uintJfpg8VL = BigInt("1649")
		const NasiLiquidityPoolFactoryFPXeaSf = await NasiLiquidityPoolFactory.new(addresswSLGpTU, addresszpSICHA, uintxEBkPwE, uintJfpg8VL, {from: accounts[4]});
		const uintFF4Vu6A = BigInt("1756")
		const uintfbVbeW2 = BigInt("53")
		const addresseDEqXcF = accounts[5]
		const uint256sugQgeZ = await NasiLiquidityPoolFactoryFPXeaSf.getBonusMultiplier.call(uintfbVbeW2, uintFF4Vu6A, {from: "0x0000000000000000000000000000000000000001"});
		const addressm0dFFz3 = await NasiLiquidityPoolFactoryFPXeaSf.addPauser.call(addresseDEqXcF, {from: accounts[5]});
	});
})