const NasiLiquidityPoolFactory = artifacts.require("NasiLiquidityPoolFactory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NasiLiquidityPoolFactory', (accounts) => {
	it('test for NasiLiquidityPoolFactory', async () => {
		const stringwvjxU8F = "s"
		const stringXezBNy = "1Cp7uOLbk5tstbuEOW43dX85lSuNa2Lqo6wlbXUzoy3nkO3jrZ"
		const uintU84cKp8 = BigInt("191")
		const NasiLiquidityPoolFactorym1qyvms = await NasiLiquidityPoolFactory.new(stringwvjxU8F, stringXezBNy, uintU84cKp8, {from: accounts[3]});
		const addressJyRIudz = accounts[4]
		const uinta9I40Lu = BigInt("281")
		const uintXowiBBS = BigInt("2038")
		const addressUnZGaYm = accounts[1]
		const addressb30kyeC = await NasiLiquidityPoolFactorym1qyvms.transferOwnership.call(addressJyRIudz, {from: accounts[0]});
		const uint256jmkxnVN = await NasiLiquidityPoolFactorym1qyvms.enterStaking.call(uinta9I40Lu, {from: accounts[1]});
		await NasiLiquidityPoolFactorym1qyvms.unpause.call({from: accounts[0]});
		const boolYByFrx7 = await NasiLiquidityPoolFactorym1qyvms.mint.call(addressUnZGaYm, uintXowiBBS, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressC7shjWd = accounts[4]
		const addressS8uH9jI = accounts[0]
		const uinthbd6RLL = BigInt("1310")
		const uintauCHAmt = BigInt("405")
		const NasiLiquidityPoolFactorykvrLBS5 = await NasiLiquidityPoolFactory.new(addressC7shjWd, addressS8uH9jI, uinthbd6RLL, uintauCHAmt, {from: accounts[0]});
		const uintlpKOt23 = BigInt("289")
		const uintFndQoSj = BigInt("1049")
		const bytehUz7PAN = "0x1c12110e0204071605041e0b070a01120c1b151b070a1a13141e1f0b0a171b17"
		const byteaKtDte = "0x1d0c1100131a121a080e0907100a1a110c031b0d08110a18160b200d1d1f030e"
		const uintNKHqe0u = BigInt("157")
		const uintq76Uqe8 = BigInt("1696")
		const uintSALD19l = BigInt("1245")
		const addressEpg2hqo = accounts[2]
		const uint256giOuUTI = await NasiLiquidityPoolFactorykvrLBS5.leaveStaking.call(uintlpKOt23, {from: accounts[3]});
		const uint256z5VH3o5 = await NasiLiquidityPoolFactorykvrLBS5.updatePool.call(uintFndQoSj, {from: accounts[0]});
		const stringt0k8ieq = await NasiLiquidityPoolFactorykvrLBS5.symbol.call({from: accounts[1]});
		const 
Ofwb1GL = await NasiLiquidityPoolFactorykvrLBS5.delegateBySig.call(addressEpg2hqo, uintSALD19l, uintq76Uqe8, uintNKHqe0u, byteaKtDte, bytehUz7PAN, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressU3CNRVK = accounts[1]
		const addresscuz9p80 = accounts[3]
		const uintFYkWCdl = BigInt("1308")
		const uintAyuAqmr = BigInt("1896")
		const NasiLiquidityPoolFactoryVzkBGIY = await NasiLiquidityPoolFactory.new(addressU3CNRVK, addresscuz9p80, uintFYkWCdl, uintAyuAqmr, {from: accounts[2]});
		const addressK0b9mL6 = accounts[1]
		const addressHkJqB50 = "0x0000000000000000000000000000000000000001"
		const uintc3HTyr0 = BigInt("1171")
		await NasiLiquidityPoolFactoryVzkBGIY.massUpdatePools.call({from: accounts[3]});
		const addressIyXewxD = await NasiLiquidityPoolFactoryVzkBGIY.delegates.call(addressK0b9mL6, {from: accounts[1]});
		await NasiLiquidityPoolFactoryVzkBGIY.unpause.call({from: accounts[4]});
		const uint256CDJwY3E = await NasiLiquidityPoolFactoryVzkBGIY.pendingNasi.call(uintc3HTyr0, addressHkJqB50, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringdInJvW7 = "M"
		const stringWC038Ni = "y2hXSYmj6TtNscTokAQYJwBXlzAvG9qEllab"
		const uintsidWyl3 = BigInt("98")
		const NasiLiquidityPoolFactoryGViFWD0 = await NasiLiquidityPoolFactory.new(stringdInJvW7, stringWC038Ni, uintsidWyl3, {from: accounts[0]});
		const addressyuFJdu = accounts[4]
		const addresssoEW7rb = "0x0000000000000000000000000000000000000001"
		const uintcPLiV5T = BigInt("1097")
		const addressR412E6b = accounts[5]
		const uinthBQeBzd = BigInt("1442")
		await NasiLiquidityPoolFactoryGViFWD0.unpause.call({from: accounts[3]});
		const addressJLlbFQ = await NasiLiquidityPoolFactoryGViFWD0._delegate.call(addresssoEW7rb, addressyuFJdu, {from: accounts[1]});
		const boolYjloMh = await NasiLiquidityPoolFactoryGViFWD0.mint.call(addressR412E6b, uintcPLiV5T, {from: accounts[5]});
		const addressTAfCoLQ = await NasiLiquidityPoolFactoryGViFWD0.owner.call({from: accounts[0]});
		const uint256e45S872 = await NasiLiquidityPoolFactoryGViFWD0.migrate.call(uinthBQeBzd, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringiajEybQ = "WhCRLKRtVkmPf8gHWsi9lsemcrdsu9WgJQgwDIesb8ob"
		const stringgLO9Cs9 = "es93irq2PbKYMR8Py5baFv4GRtDI7tt4J7LnddzNVxcdMWro07gD6r7lhUalVhRX1gvz8SD"
		const uintoO4xSte = BigInt("52")
		const NasiLiquidityPoolFactoryvP5mozm = await NasiLiquidityPoolFactory.new(stringiajEybQ, stringgLO9Cs9, uintoO4xSte, {from: "0x0000000000000000000000000000000000000001"});
		const uintQaaJR8i = BigInt("616")
		const addressWI4Z7qA = accounts[2]
		await NasiLiquidityPoolFactoryvP5mozm.unpause.call({from: accounts[1]});
		const stringOgxccq = await NasiLiquidityPoolFactoryvP5mozm.symbol.call({from: accounts[3]});
		const boolSY9htw3 = await NasiLiquidityPoolFactoryvP5mozm.mint.call(addressWI4Z7qA, uintQaaJR8i, {from: accounts[3]});
		await NasiLiquidityPoolFactoryvP5mozm.pause.call({from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressJtpdS4m = accounts[1]
		const addresswulJohp = accounts[3]
		const uintqTNLmDb = BigInt("528")
		const uintvYp37Jb = BigInt("939")
		const NasiLiquidityPoolFactoryfv4bXbx = await NasiLiquidityPoolFactory.new(addressJtpdS4m, addresswulJohp, uintqTNLmDb, uintvYp37Jb, {from: accounts[2]});
		const uinty3DGjeV = BigInt("1407")
		const uintPo33EI = BigInt("443")
		const addresszebNYpX = accounts[4]
		const uintUGBJzXh = BigInt("1632")
		const uintRZSoaVC = BigInt("903")
		const uintLZHX2ap = BigInt("305")
		const addressJBh1ViJ = accounts[2]
		const uintVb8KIP3 = BigInt("1185")
		const uint256Obj9b1p = await NasiLiquidityPoolFactoryfv4bXbx.withdraw.call(uintPo33EI, uinty3DGjeV, {from: accounts[1]});
		const uint256nTK8kzE = await NasiLiquidityPoolFactoryfv4bXbx.pendingNasi.call(uintUGBJzXh, addresszebNYpX, {from: accounts[2]});
		const uint256fzWIQeN = await NasiLiquidityPoolFactoryfv4bXbx.withdraw.call(uintLZHX2ap, uintRZSoaVC, {from: "0x0000000000000000000000000000000000000001"});
		const addressv1ofkRv = await NasiLiquidityPoolFactoryfv4bXbx.delegate.call(addressJBh1ViJ, {from: accounts[1]});
		const uint256fKUTuP = await NasiLiquidityPoolFactoryfv4bXbx.migrate.call(uintVb8KIP3, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringsrucrz3 = "lJYNJrUEs9B"
		const stringR0lCLs = "EV7xY6FEnvurDCDdvFRP6Vxo7eJymsdR0xaOO4XHLO5qr7M2PYLSk"
		const uintaio31Y0 = BigInt("164")
		const NasiLiquidityPoolFactoryHdtcDy1 = await NasiLiquidityPoolFactory.new(stringsrucrz3, stringR0lCLs, uintaio31Y0, {from: accounts[4]});
		const addressP6pJnUU = "0x0000000000000000000000000000000000000001"
		const addressIwthXbv = await NasiLiquidityPoolFactoryHdtcDy1.addMinter.call(addressP6pJnUU, {from: accounts[1]});
		await NasiLiquidityPoolFactoryHdtcDy1.massUpdatePools.call({from: "0x0000000000000000000000000000000000000001"});
		await NasiLiquidityPoolFactoryHdtcDy1.unpause.call({from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringUX2OTw = "AyeYFJ4pdep18x8R9GsFXnqQXibz7GlPgYtQ"
		const stringOG8xMjj = "meOCBF3lHBAz1QTgmvnbHcfXqYzJzxagelpjgwy89fQioKhov132D11B1b3Y6bGHa1so"
		const uintXQQQ37V = BigInt("232")
		const NasiLiquidityPoolFactoryrRAMqMl = await NasiLiquidityPoolFactory.new(stringUX2OTw, stringOG8xMjj, uintXQQQ37V, {from: accounts[1]});
		const uintlxXuMIQ = BigInt("1723")
		const addressLKMxdyd = accounts[0]
		const uintvNnodJz = BigInt("472")
		const addressaKu3uP9 = "0x0000000000000000000000000000000000000001"
		const addressL5qBkxJ = accounts[3]
		const boolzRoNX2f = await NasiLiquidityPoolFactoryrRAMqMl.transfer.call(addressLKMxdyd, uintlxXuMIQ, {from: accounts[3]});
		await NasiLiquidityPoolFactoryrRAMqMl.renounceMinter.call({from: accounts[2]});
		const boolw0WULbj = await NasiLiquidityPoolFactoryrRAMqMl.increaseAllowance.call(addressaKu3uP9, uintvNnodJz, {from: accounts[1]});
		const boolmVSODM = await NasiLiquidityPoolFactoryrRAMqMl.isMinter.call(addressL5qBkxJ, {from: accounts[3]});
		await NasiLiquidityPoolFactoryrRAMqMl.massUpdatePools.call({from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressyTlGNxe = accounts[4]
		const addressTGpZEay = "0x0000000000000000000000000000000000000001"
		const uintVQWHOMK = BigInt("113")
		const uintqOJvgHf = BigInt("2027")
		const NasiLiquidityPoolFactoryUJIwthX = await NasiLiquidityPoolFactory.new(addressyTlGNxe, addressTGpZEay, uintVQWHOMK, uintqOJvgHf, {from: accounts[1]});
		const uintmeOq3Fi = BigInt("2018")
		const uintaWBIh47 = BigInt("1785")
		const addressIOb0ymy = "0x0000000000000000000000000000000000000001"
		const uintQU7nQC = BigInt("674")
		const addressb483Ikv = accounts[2]
		const uint256Z1rLSuP = await NasiLiquidityPoolFactoryUJIwthX.migrate.call(uintmeOq3Fi, {from: accounts[4]});
		await NasiLiquidityPoolFactoryUJIwthX.renounceMinter.call({from: accounts[3]});
		await NasiLiquidityPoolFactoryUJIwthX.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const addressYhxICTX = await NasiLiquidityPoolFactoryUJIwthX.burnFrom.call(addressIOb0ymy, uintaWBIh47, {from: accounts[2]});
		const boolScZH8o7 = await NasiLiquidityPoolFactoryUJIwthX.approve.call(addressb483Ikv, uintQU7nQC, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringjapZdMq = "zfkqbFVmAIc7oRkmtikjhOTqMJlrL91BcfghdpxYqv937tZIC65Zy3XjKWu72e9WtuvjKxcDYT59Sj5LFnV"
		const stringUR4sOA = "KWzGiHRgqJsYfTXxXBbYOlkTXdwdX2k9wt3X"
		const uintrERCEV2 = BigInt("175")
		const NasiLiquidityPoolFactorynPYWBgp = await NasiLiquidityPoolFactory.new(stringjapZdMq, stringUR4sOA, uintrERCEV2, {from: accounts[2]});
		const boolbWYFJ6z = false
		const uintCqllxaX = BigInt("838")
		const uintIx2vZY = BigInt("768")
		const uintfe4ckdm = BigInt("1357")
		const addressyErqyt = accounts[0]
		const uintBh4KOIw = BigInt("466")
		const addressKd3sqPc = accounts[5]
		const uint2560RXb1H = await NasiLiquidityPoolFactorynPYWBgp.setAllocationPoint.call(uintIx2vZY, uintCqllxaX, boolbWYFJ6z, {from: accounts[3]});
		const boolWvSFnS = await NasiLiquidityPoolFactorynPYWBgp.approve.call(addressyErqyt, uintfe4ckdm, {from: accounts[1]});
		const uint256k0qxdCN = await NasiLiquidityPoolFactorynPYWBgp.totalSupply.call({from: accounts[1]});
		const boolKzmk2x1 = await NasiLiquidityPoolFactorynPYWBgp.increaseAllowance.call(addressKd3sqPc, uintBh4KOIw, {from: accounts[0]});
		const uint256D7JB3gX = await NasiLiquidityPoolFactorynPYWBgp.totalSupply.call({from: accounts[2]});
		await NasiLiquidityPoolFactorynPYWBgp.whenPaused.call({from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addresszIjXvJH = accounts[4]
		const addressXw328Oe = accounts[0]
		const uintYBXilfB = BigInt("1310")
		const uintzmXsCiz = BigInt("405")
		const NasiLiquidityPoolFactorykvrLBS5 = await NasiLiquidityPoolFactory.new(addresszIjXvJH, addressXw328Oe, uintYBXilfB, uintzmXsCiz, {from: accounts[0]});
		const uintzeGDSqj = BigInt("416")
		const uintkGAq2o8 = BigInt("1540")
		const uintSycNwIQ = BigInt("1251")
		const uintD1ZseIb = BigInt("1043")
		const bytexc2mnbp = "0x1c12110e0204071605041e0b070a01120c1b151b070a1a13141e1f0b0a171b17"
		const byteCjXW2gK = "0x1d0c1100131a121a080e0907100a1a110c031b0d08110a18160b200d1d1f030e"
		const uintRKXCXIo = BigInt("157")
		const uintvnRDqt = BigInt("1696")
		const uintZ5u5lta = BigInt("1245")
		const addressR85BNQv = accounts[2]
		const uint256yKfQek = await NasiLiquidityPoolFactorykvrLBS5.deposit.call(uintkGAq2o8, uintzeGDSqj, {from: accounts[4]});
		const uint256giOuUTI = await NasiLiquidityPoolFactorykvrLBS5.leaveStaking.call(uintSycNwIQ, {from: accounts[3]});
		const uint256z5VH3o5 = await NasiLiquidityPoolFactorykvrLBS5.updatePool.call(uintD1ZseIb, {from: accounts[0]});
		const 
Ofwb1GL = await NasiLiquidityPoolFactorykvrLBS5.delegateBySig.call(addressR85BNQv, uintZ5u5lta, uintvnRDqt, uintRKXCXIo, byteCjXW2gK, bytexc2mnbp, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringKMEIJ4F = "PzH21uTESzI2zjN7gMy13FWJ97QXr5wkpgs23bNQ3Cqj13dWtEx0PwlztCC"
		const stringCSKTnJ = "d2SKJzgLIKyKFmt9FZSA4OQsATcNccMP4SUTh2wQGkJ2kGG7QbTPtwxRZp"
		const uintSlRWVLj = BigInt("73")
		const NasiLiquidityPoolFactoryleTl1bw = await NasiLiquidityPoolFactory.new(stringKMEIJ4F, stringCSKTnJ, uintSlRWVLj, {from: accounts[4]});
		const addressfdG5SPQ = accounts[2]
		const uintaPsEDF5 = BigInt("275")
		const addressBzlFzLY = await NasiLiquidityPoolFactoryleTl1bw.addPauser.call(addressfdG5SPQ, {from: accounts[1]});
		const uint256dR4P8nl = await NasiLiquidityPoolFactoryleTl1bw.updatePool.call(uintaPsEDF5, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringWpEMm2t = "kvBBj8nNBQhFsis0oOJomQKoXk9lGBCDOg9umu5KUC7VDMhfKzau7A"
		const stringPO7Yhor = "LkrYRArQ31VjloRVcuPN6MWQRfliM1nXF14UnltxLuRH9"
		const uintuWefIZQ = BigInt("229")
		const NasiLiquidityPoolFactoryepp6rVT = await NasiLiquidityPoolFactory.new(stringWpEMm2t, stringPO7Yhor, uintuWefIZQ, {from: accounts[3]});
		const uinteMa262l = BigInt("887")
		const addresshru1XN6 = accounts[2]
		const addressayOs3tl = accounts[4]
		const addressLJh3sXc = "0x0000000000000000000000000000000000000001"
		const addressVHXP0qV = accounts[4]
		const uintlvwtM7r = BigInt("333")
		const addressamdDnNq = accounts[0]
		const addressTxUyiDA = accounts[2]
		const boolCjsSbKA = await NasiLiquidityPoolFactoryepp6rVT.transferFrom.call(addressayOs3tl, addresshru1XN6, uinteMa262l, {from: accounts[0]});
		const addressZ1WnVom = await NasiLiquidityPoolFactoryepp6rVT.transferOwnership.call(addressLJh3sXc, {from: accounts[3]});
		const addressxdv9R6F = await NasiLiquidityPoolFactoryepp6rVT.addMinter.call(addressVHXP0qV, {from: accounts[2]});
		const boolWrR3v5Z = await NasiLiquidityPoolFactoryepp6rVT.approve.call(addressamdDnNq, uintlvwtM7r, {from: accounts[2]});
		const boolas071YA = await NasiLiquidityPoolFactoryepp6rVT.isMinter.call(addressTxUyiDA, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressDdSkrtU = accounts[4]
		const addressq8RJksu = accounts[0]
		const uintncrBYOQ = BigInt("1310")
		const uintwLnZCqq = BigInt("405")
		const NasiLiquidityPoolFactorykvrLBS5 = await NasiLiquidityPoolFactory.new(addressDdSkrtU, addressq8RJksu, uintncrBYOQ, uintwLnZCqq, {from: accounts[0]});
		const uintNJbzJ8C = BigInt("1741")
		const bytelQDRqxN = "0x1c12110e0204071605041e0b070a01120c1b151b070a1a13141e1f0b0a171b17"
		const byteuTrJSVd = "0x1d0c1100131a121a080e0907100a1a110c031b0d080f0a18160b200d1d1f030e"
		const uintzYna6Ln = BigInt("157")
		const uintYuGV3hM = BigInt("1696")
		const uintKZlNGu2 = BigInt("1245")
		const addressYfcSoea = accounts[3]
		const uint256P1iy1yj = await NasiLiquidityPoolFactorykvrLBS5.enterStaking.call(uintNJbzJ8C, {from: accounts[3]});
		const 
Ofwb1GL = await NasiLiquidityPoolFactorykvrLBS5.delegateBySig.call(addressYfcSoea, uintKZlNGu2, uintYuGV3hM, uintzYna6Ln, byteuTrJSVd, bytelQDRqxN, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressWottbRY = accounts[2]
		const addressh3phbKU = accounts[2]
		const uintTxSstXC = BigInt("1003")
		const uintVksDKcO = BigInt("1277")
		const NasiLiquidityPoolFactoryCxIRiEQ = await NasiLiquidityPoolFactory.new(addressWottbRY, addressh3phbKU, uintTxSstXC, uintVksDKcO, {from: accounts[2]});
		const addressqgdBOP9 = accounts[3]
		const uintCrQ77G0 = BigInt("943")
		const addressoW1gnWk = accounts[4]
		const uintky6S2a3 = BigInt("1575")
		const uintFWMHuzS = BigInt("394")
		const uintIQjIrvO = BigInt("1413")
		const addresse0s9v7l = accounts[0]
		const addressXz4tgRL = await NasiLiquidityPoolFactoryCxIRiEQ.setMigrator.call(addressqgdBOP9, {from: accounts[5]});
		const addressZiKYsUS = await NasiLiquidityPoolFactoryCxIRiEQ.burnFrom.call(addressoW1gnWk, uintCrQ77G0, {from: accounts[4]});
		const 
kupePPb = await NasiLiquidityPoolFactoryCxIRiEQ._writeCheckpoint.call(addresse0s9v7l, uintIQjIrvO, uintFWMHuzS, uintky6S2a3, {from: accounts[1]});
		const addressXKj5ch5 = await NasiLiquidityPoolFactoryCxIRiEQ.owner.call({from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringkfsjQ6q = "5YJYbsEp71a3gdn6TBusFSB6zmQUE7qjQXDevRiWXeR1tJVU6A8Rc"
		const stringjphcTvY = "kqmVFOLdSubf2c"
		const uintnmJOvbb = BigInt("234")
		const NasiLiquidityPoolFactoryyJS2aVE = await NasiLiquidityPoolFactory.new(stringkfsjQ6q, stringjphcTvY, uintnmJOvbb, {from: accounts[0]});
		const uintqGyvThI = BigInt("1730")
		await NasiLiquidityPoolFactoryyJS2aVE.renouncePauser.call({from: accounts[0]});
		const uint8zH2PbMk = await NasiLiquidityPoolFactoryyJS2aVE.decimals.call({from: accounts[2]});
		const uint256VhFPizY = await NasiLiquidityPoolFactoryyJS2aVE.emergencyWithdraw.call(uintqGyvThI, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringciS2icB = "bEXV35"
		const stringNoNZxy = "F9QIRh6tVdb4OlLaDfrPySpFjnvqU94oPBW4FxWLONdzf97CXAzfVzU3DwIobz"
		const uintMqJdRk5 = BigInt("221")
		const NasiLiquidityPoolFactoryUA0e0vz = await NasiLiquidityPoolFactory.new(stringciS2icB, stringNoNZxy, uintMqJdRk5, {from: accounts[0]});
		const uintgiJdHJw = BigInt("1445")
		const address6yAQfi = accounts[1]
		const addressgkHyp2s = "0x0000000000000000000000000000000000000001"
		const uintiTnLqMb = BigInt("862")
		const uintMkR6krr = BigInt("861")
		const uintJFAxcRc = BigInt("702")
		const addresskuYIopI = accounts[2]
		const uinta9WWpmu = BigInt("1114")
		const uintHyTewaW = BigInt("1331")
		const addressZucPoGv = await NasiLiquidityPoolFactoryUA0e0vz.burnFrom.call(address6yAQfi, uintgiJdHJw, {from: accounts[0]});
		const uint256aNtARRZ = await NasiLiquidityPoolFactoryUA0e0vz.balanceOf.call(addressgkHyp2s, {from: accounts[3]});
		const 
y5hn3IL = await NasiLiquidityPoolFactoryUA0e0vz._writeCheckpoint.call(addresskuYIopI, uintJFAxcRc, uintMkR6krr, uintiTnLqMb, {from: accounts[1]});
		const uint256PhRFjSu = await NasiLiquidityPoolFactoryUA0e0vz.leaveStaking.call(uinta9WWpmu, {from: accounts[5]});
		const uint256fpQKVm3 = await NasiLiquidityPoolFactoryUA0e0vz.leaveStaking.call(uintHyTewaW, {from: accounts[1]});
		await NasiLiquidityPoolFactoryUA0e0vz.renounceMinter.call({from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringFjBc8i7 = "osaeGskeI7IgJjOQ6WSJptPJ92vEchGx8J44XKa5dTSscyW5q1nbmtRYUuXheo9iqfgP2km9"
		const stringDlZuHEm = "YX8MKq80fEiwWnwhQ1uIb579Cah3haR"
		const uintHaXRVKb = BigInt("236")
		const NasiLiquidityPoolFactoryu5k5Ihr = await NasiLiquidityPoolFactory.new(stringFjBc8i7, stringDlZuHEm, uintHaXRVKb, {from: accounts[4]});
		const uinthmgwivs = BigInt("1586")
		const addressxU1OGf2 = "0x0000000000000000000000000000000000000001"
		const uintSll6aNi = BigInt("1855")
		const addressKSe3Xy = accounts[4]
		const uintONx1WXV = BigInt("1667")
		const addresssDLBDIh = accounts[5]
		const uintthCot3U = BigInt("629")
		const boolhKRwHmO = await NasiLiquidityPoolFactoryu5k5Ihr.mint.call(addressxU1OGf2, uinthmgwivs, {from: accounts[1]});
		const boolWqtwl1h = await NasiLiquidityPoolFactoryu5k5Ihr.transfer.call(addressKSe3Xy, uintSll6aNi, {from: accounts[0]});
		const boolwiyBVdo = await NasiLiquidityPoolFactoryu5k5Ihr.decreaseAllowance.call(addresssDLBDIh, uintONx1WXV, {from: accounts[3]});
		const uint256sjmSGuc = await NasiLiquidityPoolFactoryu5k5Ihr.migrate.call(uintthCot3U, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressXsL6Ctw = accounts[4]
		const addressHpHey09 = "0x0000000000000000000000000000000000000001"
		const uintcXcAPrt = BigInt("113")
		const uintIYwi7v4 = BigInt("2027")
		const NasiLiquidityPoolFactoryUJIwthX = await NasiLiquidityPoolFactory.new(addressXsL6Ctw, addressHpHey09, uintcXcAPrt, uintIYwi7v4, {from: accounts[1]});
		const uintey1Bdpv = BigInt("465")
		const uintyvbcW0C = BigInt("2012")
		const addressFXYEaV = accounts[4]
		const addresscrpsgnQ = accounts[1]
		const uint256cS1flRy = await NasiLiquidityPoolFactoryUJIwthX.emergencyWithdraw.call(uintey1Bdpv, {from: accounts[3]});
		const uint256Z1rLSuP = await NasiLiquidityPoolFactoryUJIwthX.migrate.call(uintyvbcW0C, {from: accounts[4]});
		const uint256RueOo8I = await NasiLiquidityPoolFactoryUJIwthX.allowance.call(addresscrpsgnQ, addressFXYEaV, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringGs4NaEg = "c6gaHqLSojqBRh9dzjJIO1c6IYNNUgQPQrlNADVpjc6VrVqWzW2GHaK4oDlsBIyf"
		const stringJ9fWlye = "XK1XhYXdWFLxLT3Ryk5NrtsxE8wrP7xUdks7uukrLyKKWI0wTrdkgkMTEslwBL8I9rAkXVeNyiNcfQIid5ZBf0IMb"
		const uintssDpxtw = BigInt("39")
		const NasiLiquidityPoolFactoryLBenwsu = await NasiLiquidityPoolFactory.new(stringGs4NaEg, stringJ9fWlye, uintssDpxtw, {from: accounts[1]});
		const uintUELQiIy = BigInt("1462")
		const uintY0ZUtYb = BigInt("237")
		const addressTy9n8U = accounts[4]
		const uintzC9aDfv = BigInt("1512")
		const uint256rLj1vi = await NasiLiquidityPoolFactoryLBenwsu.enterStaking.call(uintUELQiIy, {from: accounts[1]});
		const boolLiNu0ME = await NasiLiquidityPoolFactoryLBenwsu.approve.call(addressTy9n8U, uintY0ZUtYb, {from: "0x0000000000000000000000000000000000000001"});
		const uint256h6AHzgl = await NasiLiquidityPoolFactoryLBenwsu.migrate.call(uintzC9aDfv, {from: accounts[3]});
		await NasiLiquidityPoolFactoryLBenwsu.renouncePauser.call({from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringdMVoAyd = "tA1zkru3n4scxwK4IdyzNzviieJUSfOPbzK3Jeua9uVOuOFigyrf0UpbhYnmau2"
		const stringZhythqW = "uKvYAXrhVCAQlEh8iM4KUMIJIDGQvuRYIUA3mSv2oq4uPTgRQc12sTMscqaNF14uRmt0I6FhmSf"
		const uintea9Nuw9 = BigInt("247")
		const NasiLiquidityPoolFactoryiROvNu = await NasiLiquidityPoolFactory.new(stringdMVoAyd, stringZhythqW, uintea9Nuw9, {from: accounts[3]});
		const uintTmfJuqI = BigInt("1045")
		const addresskaobD2I = accounts[3]
		const addresse79nRyK = accounts[1]
		const addressaMhf9hW = accounts[5]
		const addressLWKw2r = await NasiLiquidityPoolFactoryiROvNu.burnFrom.call(addresskaobD2I, uintTmfJuqI, {from: accounts[3]});
		const addressYMrjHWF = await NasiLiquidityPoolFactoryiROvNu._delegate.call(addressaMhf9hW, addresse79nRyK, {from: accounts[1]});
		const booljwByMJu = await NasiLiquidityPoolFactoryiROvNu.isOwner.call({from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressfTpzb9u = accounts[4]
		const addressrw0Amty = accounts[0]
		const uintLfyNgw = BigInt("1310")
		const uintzxSfFg5 = BigInt("405")
		const NasiLiquidityPoolFactorykvrLBS5 = await NasiLiquidityPoolFactory.new(addressfTpzb9u, addressrw0Amty, uintLfyNgw, uintzxSfFg5, {from: accounts[0]});
		const addressSd4ljdd = accounts[1]
		const address1VGAlD = accounts[1]
		const uintKkshyYY = BigInt("1885")
		const uintE17VyB = BigInt("477")
		const addresskXUkZxu = accounts[5]
		const addressXsvBgxt = await NasiLiquidityPoolFactorykvrLBS5.transferOwnership.call(addressSd4ljdd, {from: accounts[0]});
		const addresssfRE9U = await NasiLiquidityPoolFactorykvrLBS5.addMinter.call(address1VGAlD, {from: accounts[0]});
		const uint256giOuUTI = await NasiLiquidityPoolFactorykvrLBS5.leaveStaking.call(uintKkshyYY, {from: accounts[3]});
		const boolRHMTT1a = await NasiLiquidityPoolFactorykvrLBS5.transfer.call(addresskXUkZxu, uintE17VyB, {from: accounts[2]});
		const stringxAgUkaP = await NasiLiquidityPoolFactorykvrLBS5.name.call({from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressRKMU9rm = accounts[2]
		const addressCTGE0Y7 = accounts[5]
		const uintprdytMt = BigInt("43")
		const uintM59IT4P = BigInt("1229")
		const NasiLiquidityPoolFactorydhbZVLn = await NasiLiquidityPoolFactory.new(addressRKMU9rm, addressCTGE0Y7, uintprdytMt, uintM59IT4P, {from: "0x0000000000000000000000000000000000000001"});
		const uintUdWb7uU = BigInt("832")
		const addressTcEcR4U = "0x0000000000000000000000000000000000000001"
		const addressMIK8vAb = accounts[3]
		const boolIo0eAH = await NasiLiquidityPoolFactorydhbZVLn.approve.call(addressTcEcR4U, uintUdWb7uU, {from: accounts[5]});
		const addressWE4hFv8 = await NasiLiquidityPoolFactorydhbZVLn.delegate.call(addressMIK8vAb, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressxhprgcm = accounts[1]
		const addressPA8AxHa = accounts[3]
		const uintnTPrB2Q = BigInt("528")
		const uintpQxYFS3 = BigInt("939")
		const NasiLiquidityPoolFactoryfv4bXbx = await NasiLiquidityPoolFactory.new(addressxhprgcm, addressPA8AxHa, uintnTPrB2Q, uintpQxYFS3, {from: accounts[2]});
		const addressbaFIout = accounts[2]
		const uintTTuRerO = BigInt("1339")
		const uintQX08EmF = BigInt("1195")
		const addressYUeXQ5 = accounts[2]
		const uintnZqmTUt = BigInt("100")
		const uintd0oKK2J = BigInt("443")
		const uintAd3Aa2V = BigInt("631")
		const addressj0EP4sm = accounts[1]
		const uint256NKmaODz = await NasiLiquidityPoolFactoryfv4bXbx.pendingNasi.call(uintTTuRerO, addressbaFIout, {from: accounts[1]});
		const uint256j2cnaY = await NasiLiquidityPoolFactoryfv4bXbx.getPriorVotes.call(addressYUeXQ5, uintQX08EmF, {from: accounts[0]});
		const uint256Obj9b1p = await NasiLiquidityPoolFactoryfv4bXbx.withdraw.call(uintd0oKK2J, uintnZqmTUt, {from: accounts[1]});
		const boolosmxivf = await NasiLiquidityPoolFactoryfv4bXbx.decreaseAllowance.call(addressj0EP4sm, uintAd3Aa2V, {from: accounts[3]});
	});
})