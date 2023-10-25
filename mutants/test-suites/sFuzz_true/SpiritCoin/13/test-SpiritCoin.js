const SpiritCoin = artifacts.require("SpiritCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SpiritCoin', (accounts) => {
	it('test for SpiritCoin', async () => {
		const addressv92Zqpl = accounts[1]
		const addressbLNotN8 = accounts[5]
		const SpiritCoinJY9r2n9 = await SpiritCoin.new(addressv92Zqpl, addressbLNotN8, {from: accounts[4]});
		const addressozsb1n = "0x0000000000000000000000000000000000000001"
		const addressykDDpV = accounts[2]
		const uintpn2F9Ur = BigInt("764")
		const addressIBvNcWx = accounts[5]
		const addressHSW2RmV = accounts[1]
		const uintYLjUvWV = await SpiritCoinJY9r2n9.allowance.call(addressykDDpV, addressozsb1n, {from: "0x0000000000000000000000000000000000000001"});
//		const booldCSSryX = await SpiritCoinJY9r2n9.transfer.call(addressIBvNcWx, uintpn2F9Ur, {from: accounts[0]});
//		const uintDAdLgfj = await SpiritCoinJY9r2n9.balanceOf.call(addressHSW2RmV, {from: accounts[1]});

		assert.equal(uintYLjUvWV, BigInt("0"))
		await expect(SpiritCoinJY9r2n9.transfer.call(addressIBvNcWx, uintpn2F9Ur, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressaJyeKC = accounts[2]
		const addressk9LVXmA = accounts[1]
		const SpiritCoinJVBGDep = await SpiritCoin.new(addressaJyeKC, addressk9LVXmA, {from: accounts[0]});
		const uintyYIzYRJ = BigInt("1196")
		const addressfPnmWOk = accounts[3]
		const addressOrwI2DF = accounts[5]
		const uintIAPa65A = BigInt("769")
		const addresskFCOXFU = "0x0000000000000000000000000000000000000001"
		const uintodEMiSz = BigInt("932")
		const addressTJIP4Mb = accounts[4]
		const addressnt79EVv = accounts[0]
		const addressMzOPm3y = accounts[0]
		const addresst7NndtS = "0x0000000000000000000000000000000000000001"
		const boolKJ20lwi = await SpiritCoinJVBGDep.approve.call(addressfPnmWOk, uintyYIzYRJ, {from: accounts[4]});
		const uintTQxGBfI = await SpiritCoinJVBGDep.balanceOf.call(addressOrwI2DF, {from: accounts[3]});
//		const boolnl03v3M = await SpiritCoinJVBGDep.transfer.call(addresskFCOXFU, uintIAPa65A, {from: accounts[1]});
//		const boolV31HE9T = await SpiritCoinJVBGDep.transferFrom.call(addressnt79EVv, addressTJIP4Mb, uintodEMiSz, {from: accounts[5]});
//		const uintOvRslJD = await SpiritCoinJVBGDep.allowance.call(addresst7NndtS, addressMzOPm3y, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolKJ20lwi, true)
		assert.equal(uintTQxGBfI, BigInt("0"))
		await expect(SpiritCoinJVBGDep.transfer.call(addresskFCOXFU, uintIAPa65A, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressPuCjqOF = accounts[2]
		const addresscub8zGk = accounts[0]
		const SpiritCoinKlsjpxh = await SpiritCoin.new(addressPuCjqOF, addresscub8zGk, {from: accounts[4]});
		const uintchqTC0 = BigInt("539")
		const addressAc0Wahc = "0x0000000000000000000000000000000000000001"
		const addressuj6umSm = accounts[0]
		const addressiEQH9u3 = accounts[5]
		const uintpejiEKy = BigInt("1790")
		const addressayAE22i = accounts[4]
		const addressJLHL3pJ = accounts[4]
		const uinte9P2ut1 = BigInt("366")
		const addressOYfhbNZ = accounts[1]
		const boolwLCYYnU = await SpiritCoinKlsjpxh.approve.call(addressAc0Wahc, uintchqTC0, {from: accounts[4]});
		const uintWDMgJBn = await SpiritCoinKlsjpxh.allowance.call(addressiEQH9u3, addressuj6umSm, {from: accounts[1]});
//		const boolqBBoDb = await SpiritCoinKlsjpxh.transferFrom.call(addressJLHL3pJ, addressayAE22i, uintpejiEKy, {from: accounts[2]});
//		const boolMGbF2hk = await SpiritCoinKlsjpxh.approve.call(addressOYfhbNZ, uinte9P2ut1, {from: accounts[3]});

		assert.equal(boolwLCYYnU, true)
		assert.equal(uintWDMgJBn, BigInt("0"))
		await expect(SpiritCoinKlsjpxh.transferFrom.call(addressJLHL3pJ, addressayAE22i, uintpejiEKy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressQnxy15V = accounts[2]
		const addressD1tMfwe = accounts[5]
		const SpiritCoins5kOep = await SpiritCoin.new(addressQnxy15V, addressD1tMfwe, {from: accounts[4]});
		const uintaXPDhg3 = BigInt("516")
		const addressiquL4tc = accounts[2]
		const uintkNlAzq = BigInt("1441")
		const addressDEPv6F4 = accounts[5]
		const uintyQfWIt0 = BigInt("898")
		const addressMx7iAe = accounts[4]
		const uintRtdepLp = BigInt("585")
		const addresse0klkH2 = accounts[0]
		const addresseMElJGv = "0x0000000000000000000000000000000000000001"
		const uinto1MwkU8 = BigInt("1215")
		const addresseh8xuhk = "0x0000000000000000000000000000000000000001"
//		const addressBjbdKNx = await SpiritCoins5kOep.mint.call(addressiquL4tc, uintaXPDhg3, {from: accounts[3]});
//		const addresspkrJoyx = await SpiritCoins5kOep.mint.call(addressDEPv6F4, uintkNlAzq, {from: "0x0000000000000000000000000000000000000001"});
//		const boolwFZuW4p = await SpiritCoins5kOep.approve.call(addressMx7iAe, uintyQfWIt0, {from: accounts[5]});
//		const boolPMlMbW = await SpiritCoins5kOep.transferFrom.call(addresseMElJGv, addresse0klkH2, uintRtdepLp, {from: accounts[3]});
//		const boolHlpQdA = await SpiritCoins5kOep.transfer.call(addresseh8xuhk, uinto1MwkU8, {from: accounts[0]});

		await expect(SpiritCoins5kOep.mint.call(addressiquL4tc, uintaXPDhg3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addresss8aShDE = accounts[3]
		const addressh5obDE6 = "0x0000000000000000000000000000000000000001"
		const SpiritCoiny7aYA8p = await SpiritCoin.new(addresss8aShDE, addressh5obDE6, {from: accounts[0]});
		const addressLEIyf7n = "0x0000000000000000000000000000000000000001"
		const addressovp7oS1 = accounts[2]
		const addressVPNAAeM = accounts[2]
		const addresslKcDHt = accounts[0]
		const addressW4E71aJ = accounts[1]
		const addressKe3Kdps = accounts[2]
//		const addresspd68l77 = await SpiritCoiny7aYA8p.setMinter.call(addressLEIyf7n, {from: accounts[1]});
//		const addressmWU8EGe = await SpiritCoiny7aYA8p.setMinter.call(addressovp7oS1, {from: accounts[0]});
//		const uintZnMDRNT = await SpiritCoiny7aYA8p.allowance.call(addresslKcDHt, addressVPNAAeM, {from: accounts[3]});
//		const uintHWhBUu = await SpiritCoiny7aYA8p.allowance.call(addressKe3Kdps, addressW4E71aJ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SpiritCoiny7aYA8p.setMinter.call(addressLEIyf7n, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressLTh9TXH = accounts[2]
		const addressd46nK8b = accounts[1]
		const SpiritCoinOJp3KXD = await SpiritCoin.new(addressLTh9TXH, addressd46nK8b, {from: accounts[0]});
		const addressZbyOSK0 = accounts[1]
		const uintnQP5PDD = BigInt("771")
		const addressSnJ4f1M = accounts[1]
		const addressf0AMNH = accounts[3]
		const uinty5s9wI = BigInt("803")
		const addressRAlQUDv = accounts[0]
		const uintTWf6SSY = BigInt("353")
		const addressx3afHE4 = accounts[4]
		const addressekKd7qj = await SpiritCoinOJp3KXD.setMinter.call(addressZbyOSK0, {from: accounts[1]});
//		const boolnbTwNKl = await SpiritCoinOJp3KXD.transferFrom.call(addressf0AMNH, addressSnJ4f1M, uintnQP5PDD, {from: accounts[4]});
//		const boole8K8R6W = await SpiritCoinOJp3KXD.transfer.call(addressRAlQUDv, uinty5s9wI, {from: accounts[0]});
//		const booldR6kLm = await SpiritCoinOJp3KXD.transfer.call(addressx3afHE4, uintTWf6SSY, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SpiritCoinOJp3KXD.transferFrom.call(addressf0AMNH, addressSnJ4f1M, uintnQP5PDD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressWvZ2Ic0 = accounts[2]
		const addressd5p1cgF = accounts[0]
		const SpiritCoinKlsjpxh = await SpiritCoin.new(addressWvZ2Ic0, addressd5p1cgF, {from: accounts[4]});
		const uintTMacLc = BigInt("539")
		const addresssPDlpP = "0x0000000000000000000000000000000000000001"
		const addressQiUoAFB = accounts[0]
		const addressJn6Bt34 = accounts[6]
		const uinte9xiYhW = BigInt("1790")
		const addressW4eZ7LI = accounts[4]
		const addressgXKmKY7 = accounts[2]
		const uintCyYBJuf = BigInt("366")
		const addressMpdzsYt = accounts[1]
		const uintQsH29oN = BigInt("1734")
		const addressswmCJjW = "0x0000000000000000000000000000000000000001"
		const boolwLCYYnU = await SpiritCoinKlsjpxh.approve.call(addresssPDlpP, uintTMacLc, {from: accounts[4]});
		const uintWDMgJBn = await SpiritCoinKlsjpxh.allowance.call(addressJn6Bt34, addressQiUoAFB, {from: accounts[1]});
		const boolqBBoDb = await SpiritCoinKlsjpxh.transferFrom.call(addressgXKmKY7, addressW4eZ7LI, uinte9xiYhW, {from: accounts[2]});
		const boolMGbF2hk = await SpiritCoinKlsjpxh.approve.call(addressMpdzsYt, uintCyYBJuf, {from: accounts[3]});
//		const boolFQ6Rpjg = await SpiritCoinKlsjpxh.transfer.call(addressswmCJjW, uintQsH29oN, {from: accounts[1]});

		assert.equal(boolMGbF2hk, true)
		assert.equal(boolqBBoDb, true)
		assert.equal(boolwLCYYnU, true)
		assert.equal(uintWDMgJBn, BigInt("0"))
		await expect(SpiritCoinKlsjpxh.transfer.call(addressswmCJjW, uintQsH29oN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressrIwfWO0 = accounts[2]
		const addresscRx9RAt = accounts[2]
		const SpiritCoinnq12pU7 = await SpiritCoin.new(addressrIwfWO0, addresscRx9RAt, {from: "0x0000000000000000000000000000000000000001"});
		const addressHsxMo9i = accounts[0]
		const addressimUEluw = accounts[0]
		const uintJA9FU0P = BigInt("103")
		const addressPgTsU6 = accounts[0]
		const uintkMPsHNn = BigInt("1216")
		const addressWNUFtGU = accounts[1]
		const uintA99QiG5 = await SpiritCoinnq12pU7.allowance.call(addressimUEluw, addressHsxMo9i, {from: accounts[2]});
		const booliLKlRol = await SpiritCoinnq12pU7.approve.call(addressPgTsU6, uintJA9FU0P, {from: accounts[3]});
		const boolEGjafiZ = await SpiritCoinnq12pU7.approve.call(addressWNUFtGU, uintkMPsHNn, {from: accounts[0]});
	});

	it('test for SpiritCoin', async () => {
		const addressjRA1Pqr = accounts[1]
		const addressC6czX1P = accounts[5]
		const SpiritCoinJY9r2n9 = await SpiritCoin.new(addressjRA1Pqr, addressC6czX1P, {from: accounts[4]});
		const addressur4aod = "0x0000000000000000000000000000000000000001"
		const addresszWWERUg = accounts[3]
		const uintQ40toRz = BigInt("304")
		const addressqE3JE4 = accounts[1]
		const uintsynJBYT = BigInt("219")
		const addressVpUleeG = accounts[5]
		const uintYLjUvWV = await SpiritCoinJY9r2n9.allowance.call(addresszWWERUg, addressur4aod, {from: "0x0000000000000000000000000000000000000001"});
		const boolTBMCSH = await SpiritCoinJY9r2n9.approve.call(addressqE3JE4, uintQ40toRz, {from: accounts[3]});
		const addressnEemAFH = await SpiritCoinJY9r2n9.mint.call(addressVpUleeG, uintsynJBYT, {from: accounts[5]});

		assert.equal(boolTBMCSH, true)
		assert.equal(uintYLjUvWV, BigInt("0"))
	});
})