const CryptoSecureBankToken = artifacts.require("CryptoSecureBankToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CryptoSecureBankToken', (accounts) => {
	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenDPTZc5V = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintXumJ3gQ = BigInt("1690")
		const addressUzEp5g5 = accounts[0]
		const uintABXgAl = BigInt("779")
		const addressHxCQXTE = accounts[1]
		const addressKMzo96L = accounts[0]
		const addressK1gQUv2 = accounts[1]
//		const boolJqIntkV = await CryptoSecureBankTokenDPTZc5V.transfer.call(addressUzEp5g5, uintXumJ3gQ, {from: accounts[1]});
//		const booljgkwT1 = await CryptoSecureBankTokenDPTZc5V.transferFrom.call(addressKMzo96L, addressHxCQXTE, uintABXgAl, {from: accounts[4]});
//		const boolYt8qJwn = await CryptoSecureBankTokenDPTZc5V.getBlackListStatus.call(addressK1gQUv2, {from: accounts[5]});
//		await CryptoSecureBankTokenDPTZc5V.whenPaused.call({from: accounts[1]});

		await expect(CryptoSecureBankTokenDPTZc5V.transfer.call(addressUzEp5g5, uintXumJ3gQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenuZfi4Az = await CryptoSecureBankToken.new({from: accounts[5]});
		const addressboRqeo4 = accounts[5]
		const addressEynrK2l = accounts[5]
		const addressJnJVe43 = accounts[1]
//		const addressBzJYdCO = await CryptoSecureBankTokenuZfi4Az.addBlackList.call(addressboRqeo4, {from: accounts[4]});
//		const addressp6XSuMk = await CryptoSecureBankTokenuZfi4Az.setOwner2.call(addressEynrK2l, {from: accounts[4]});
//		const addressjgy6Ozq = await CryptoSecureBankTokenuZfi4Az.destroyBlackFunds.call(addressJnJVe43, {from: accounts[5]});

		await expect(CryptoSecureBankTokenuZfi4Az.addBlackList.call(addressboRqeo4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenieEWhaf = await CryptoSecureBankToken.new({from: accounts[5]});
		const addresswx7UPX = accounts[4]
		const addressU5RrFAf = accounts[1]
		const uintQQjvjl = BigInt("386")
		const addressqjttYg1 = accounts[1]
//		await CryptoSecureBankTokenieEWhaf.whenNotPaused.call({from: accounts[3]});
//		const uintfm2x9T = await CryptoSecureBankTokenieEWhaf.balanceOf.call(addresswx7UPX, {from: "0x0000000000000000000000000000000000000001"});
//		const boolxP16Kj0 = await CryptoSecureBankTokenieEWhaf.deprecate.call(addressU5RrFAf, {from: accounts[2]});
//		const booltt4IYun = await CryptoSecureBankTokenieEWhaf.transfer.call(addressqjttYg1, uintQQjvjl, {from: accounts[1]});

		await expect(CryptoSecureBankTokenieEWhaf.whenNotPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenxhxvK99 = await CryptoSecureBankToken.new({from: accounts[1]});
		const uintPWVNcvD = BigInt("1812")
		const addressw74JqZ5 = accounts[3]
		const addressUGZAuNh = accounts[2]
		const addressunVyzFC = accounts[2]
		const uinte8pB0Fi = BigInt("1468")
		const addressH2X8BDl = accounts[5]
//		const boolElvMfKr = await CryptoSecureBankTokenxhxvK99.transferFrom.call(addressUGZAuNh, addressw74JqZ5, uintPWVNcvD, {from: accounts[3]});
//		const addresseMfJvA1 = await CryptoSecureBankTokenxhxvK99.setOwner2.call(addressunVyzFC, {from: accounts[2]});
//		const boolNla8rXh = await CryptoSecureBankTokenxhxvK99.transfer.call(addressH2X8BDl, uinte8pB0Fi, {from: accounts[5]});
//		await CryptoSecureBankTokenxhxvK99.pause.call({from: accounts[4]});
//		const addressU2PAKCt = await CryptoSecureBankTokenxhxvK99.getOwner.call({from: accounts[4]});

		await expect(CryptoSecureBankTokenxhxvK99.transferFrom.call(addressUGZAuNh, addressw74JqZ5, uintPWVNcvD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenKTetOJS = await CryptoSecureBankToken.new({from: "0x0000000000000000000000000000000000000001"});
		const addressK863Vub = accounts[1]
		const uintQxzwWbg = BigInt("1269")
		const addressMkW4Os8 = accounts[4]
		const addressBU1UTYT = accounts[0]
		const addresspcPlcq4 = await CryptoSecureBankTokenKTetOJS.addBlackList.call(addressK863Vub, {from: accounts[2]});
		await CryptoSecureBankTokenKTetOJS.whenNotPaused.call({from: accounts[5]});
		const boola1Iseb0 = await CryptoSecureBankTokenKTetOJS.approve.call(addressMkW4Os8, uintQxzwWbg, {from: "0x0000000000000000000000000000000000000001"});
		const addressfw2899N = await CryptoSecureBankTokenKTetOJS.transferOwnership.call(addressBU1UTYT, {from: accounts[1]});
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenuGFujOv = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressOlml6Le = accounts[4]
		const addressdLsuYXQ = accounts[0]
		const addressKqg86Z8 = accounts[3]
		const addressnWswyyB = accounts[2]
		const addressvmAxdud = accounts[0]
		const uintEHtTYyw = await CryptoSecureBankTokenuGFujOv.balanceOf.call(addressOlml6Le, {from: accounts[2]});
		const uintZ0KS5ds = await CryptoSecureBankTokenuGFujOv.allowance.call(addressKqg86Z8, addressdLsuYXQ, {from: accounts[2]});
//		await CryptoSecureBankTokenuGFujOv.pause.call({from: accounts[1]});
//		const uintysLxhqI = await CryptoSecureBankTokenuGFujOv.allowance.call(addressvmAxdud, addressnWswyyB, {from: accounts[2]});

		assert.equal(uintEHtTYyw, BigInt("0"))
		assert.equal(uintZ0KS5ds, BigInt("0"))
		await expect(CryptoSecureBankTokenuGFujOv.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenuZfi4Az = await CryptoSecureBankToken.new({from: accounts[5]});
		const addressbDai750 = accounts[3]
//		const addressjgy6Ozq = await CryptoSecureBankTokenuZfi4Az.destroyBlackFunds.call(addressbDai750, {from: accounts[5]});

		await expect(CryptoSecureBankTokenuZfi4Az.destroyBlackFunds.call(addressbDai750, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenuGFujOv = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressPo3pS0k = accounts[4]
		const addressZ1eQnas = accounts[0]
		const addresshEOe0Up = accounts[3]
		const addressG5sBvZu = "0x0000000000000000000000000000000000000001"
		const uintEHtTYyw = await CryptoSecureBankTokenuGFujOv.balanceOf.call(addressPo3pS0k, {from: accounts[2]});
		const uintC4iMeZX = await CryptoSecureBankTokenuGFujOv.totalSupply.call({from: accounts[3]});
		const uintZ0KS5ds = await CryptoSecureBankTokenuGFujOv.allowance.call(addresshEOe0Up, addressZ1eQnas, {from: accounts[2]});
//		await CryptoSecureBankTokenuGFujOv.pause.call({from: accounts[1]});
//		const addressYTTBU1e = await CryptoSecureBankTokenuGFujOv.removeBlackList.call(addressG5sBvZu, {from: accounts[4]});
//		const addressSALZzcf = await CryptoSecureBankTokenuGFujOv.getOwner.call({from: accounts[2]});

		assert.equal(uintC4iMeZX, BigInt("100000000000000000000000000"))
		assert.equal(uintEHtTYyw, BigInt("0"))
		assert.equal(uintZ0KS5ds, BigInt("0"))
		await expect(CryptoSecureBankTokenuGFujOv.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenuGFujOv = await CryptoSecureBankToken.new({from: accounts[1]});
		const uintvIvc7a6 = BigInt("1562")
		const addressWNiMiwd = accounts[4]
		const addressywDmf3 = accounts[0]
		const addressSCdrISw = accounts[3]
		const addressMm3fINo = "0x0000000000000000000000000000000000000001"
		const boolz1JqUIb = await CryptoSecureBankTokenuGFujOv.approve.call(addressWNiMiwd, uintvIvc7a6, {from: accounts[0]});
		const uintZ0KS5ds = await CryptoSecureBankTokenuGFujOv.allowance.call(addressSCdrISw, addressywDmf3, {from: accounts[2]});
//		await CryptoSecureBankTokenuGFujOv.pause.call({from: accounts[1]});
//		const addressYTTBU1e = await CryptoSecureBankTokenuGFujOv.removeBlackList.call(addressMm3fINo, {from: accounts[4]});

		assert.equal(boolz1JqUIb, true)
		assert.equal(uintZ0KS5ds, BigInt("0"))
		await expect(CryptoSecureBankTokenuGFujOv.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenuGFujOv = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressEpWXdAT = accounts[3]
		const addresskkLyluL = accounts[4]
		const addressItvFqKt = accounts[0]
		const addressXTq3gll = accounts[3]
		const addressPorFR0O = "0x0000000000000000000000000000000000000001"
//		const addresslcqPeFx = await CryptoSecureBankTokenuGFujOv.transferOwnership.call(addressEpWXdAT, {from: accounts[2]});
//		const uintEHtTYyw = await CryptoSecureBankTokenuGFujOv.balanceOf.call(addresskkLyluL, {from: accounts[2]});
//		const uintZ0KS5ds = await CryptoSecureBankTokenuGFujOv.allowance.call(addressXTq3gll, addressItvFqKt, {from: accounts[2]});
//		const addressYTTBU1e = await CryptoSecureBankTokenuGFujOv.removeBlackList.call(addressPorFR0O, {from: accounts[4]});

		await expect(CryptoSecureBankTokenuGFujOv.transferOwnership.call(addressEpWXdAT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenv8bMGUR = await CryptoSecureBankToken.new({from: accounts[4]});
		const address6eRKxb = "0x0000000000000000000000000000000000000001"
		const addressIt4e536 = accounts[2]
		const uintOfMsY29 = BigInt("77")
		const addressHd0insS = accounts[5]
		const uintqipiO3n = await CryptoSecureBankTokenv8bMGUR.balanceOf.call(address6eRKxb, {from: accounts[4]});
		const boolpAMtmH = await CryptoSecureBankTokenv8bMGUR.getBlackListStatus.call(addressIt4e536, {from: accounts[2]});
		const boolFUgeRBr = await CryptoSecureBankTokenv8bMGUR.approve.call(addressHd0insS, uintOfMsY29, {from: accounts[4]});

		assert.equal(boolFUgeRBr, true)
		assert.equal(boolpAMtmH, false)
		assert.equal(uintqipiO3n, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenQx0NZvA = await CryptoSecureBankToken.new({from: accounts[0]});
		const addresswxL8dQ = await CryptoSecureBankTokenQx0NZvA.getOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const addressREJLzp = await CryptoSecureBankTokenQx0NZvA.getOwner.call({from: accounts[1]});

		assert.equal(addressREJLzp, 0x421D7C4d087742Dd1802c56a7972190BEDcEdA6D)
		assert.equal(addresswxL8dQ, 0x421D7C4d087742Dd1802c56a7972190BEDcEdA6D)
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenuGFujOv = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressP8duRlm = accounts[2]
		const addressL4U7cYf = accounts[3]
		const addressi8IBNK = accounts[1]
		const uintxMElFLU = BigInt("867")
		const addressHKqZFv = accounts[4]
		const uintt4gpt7j = BigInt("605")
		const addressDIv2b0 = accounts[4]
		const addressf1L3Rxi = "0x0000000000000000000000000000000000000001"
		const uintYL7nJWF = BigInt("240")
		const addressH7gczU = "0x0000000000000000000000000000000000000001"
		const addressZHExMuT = accounts[1]
		const uintPTxMzI1 = await CryptoSecureBankTokenuGFujOv.allowance.call(addressL4U7cYf, addressP8duRlm, {from: accounts[1]});
		const addressG2umpRs = await CryptoSecureBankTokenuGFujOv.transferOwnership.call(addressi8IBNK, {from: accounts[1]});
		const boolfORcoU5 = await CryptoSecureBankTokenuGFujOv.approve.call(addressHKqZFv, uintxMElFLU, {from: accounts[2]});
//		const boolAsrPit6 = await CryptoSecureBankTokenuGFujOv.transfer.call(addressDIv2b0, uintt4gpt7j, {from: accounts[4]});
//		const addressYTTBU1e = await CryptoSecureBankTokenuGFujOv.removeBlackList.call(addressf1L3Rxi, {from: accounts[4]});
//		const boolOFKfFzA = await CryptoSecureBankTokenuGFujOv.transfer.call(addressH7gczU, uintYL7nJWF, {from: accounts[2]});
//		await CryptoSecureBankTokenuGFujOv.whenNotPaused.call({from: accounts[4]});
//		const addresstvUwjMV = await CryptoSecureBankTokenuGFujOv.destroyBlackFunds.call(addressZHExMuT, {from: accounts[0]});

		assert.equal(boolfORcoU5, true)
		assert.equal(uintPTxMzI1, BigInt("0"))
		await expect(CryptoSecureBankTokenuGFujOv.transfer.call(addressDIv2b0, uintt4gpt7j, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenxgXssel = await CryptoSecureBankToken.new({from: accounts[1]});
		const uintkDfKPpU = BigInt("601")
		const addressrdo8lRR = accounts[5]
		const uintFS07nqR = BigInt("701")
		const uintchujzOd = BigInt("1070")
		const boolAE3Asf = await CryptoSecureBankTokenxgXssel.approve.call(addressrdo8lRR, uintkDfKPpU, {from: accounts[3]});
//		const uintG4r9Grm = await CryptoSecureBankTokenxgXssel.setParams.call(uintchujzOd, uintFS07nqR, {from: accounts[1]});
//		await CryptoSecureBankTokenxgXssel.whenNotPaused.call({from: accounts[2]});
//		await CryptoSecureBankTokenxgXssel.whenPaused.call({from: accounts[2]});

		assert.equal(boolAE3Asf, true)
		await expect(CryptoSecureBankTokenxgXssel.setParams.call(uintchujzOd, uintFS07nqR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenuGFujOv = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressZMWmvW = accounts[5]
		const addressUHE89Qh = accounts[2]
		const addressmPg5hEv = accounts[3]
		const addressPtUF8HY = accounts[4]
		const uintN10c4bJ = BigInt("578")
		const addressSTcpHBA = accounts[3]
		const addressgIv24X = "0x0000000000000000000000000000000000000001"
		const uintAffIwGz = BigInt("240")
		const addressdQgWMy = "0x0000000000000000000000000000000000000001"
		const addressXbzT0fV = "0x0000000000000000000000000000000000000001"
		const uintdWKCZeR = await CryptoSecureBankTokenuGFujOv.balanceOf.call(addressZMWmvW, {from: accounts[3]});
		const uintPTxMzI1 = await CryptoSecureBankTokenuGFujOv.allowance.call(addressmPg5hEv, addressUHE89Qh, {from: accounts[1]});
		const boolUmqfBKt = await CryptoSecureBankTokenuGFujOv.deprecate.call(addressPtUF8HY, {from: accounts[1]});
//		const boolAsrPit6 = await CryptoSecureBankTokenuGFujOv.transfer.call(addressSTcpHBA, uintN10c4bJ, {from: accounts[4]});
//		const addressYTTBU1e = await CryptoSecureBankTokenuGFujOv.removeBlackList.call(addressgIv24X, {from: accounts[4]});
//		const boolOFKfFzA = await CryptoSecureBankTokenuGFujOv.transfer.call(addressdQgWMy, uintAffIwGz, {from: accounts[2]});
//		const addressUqEvYM = await CryptoSecureBankTokenuGFujOv.transferOwnership.call(addressXbzT0fV, {from: accounts[4]});

		assert.equal(boolUmqfBKt, true)
		assert.equal(uintPTxMzI1, BigInt("0"))
		assert.equal(uintdWKCZeR, BigInt("0"))
		await expect(CryptoSecureBankTokenuGFujOv.transfer.call(addressSTcpHBA, uintN10c4bJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenNicAO6H = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressVOWN3uf = accounts[1]
		const addressXWMFkrK = accounts[1]
		const addressAdPek1h = await CryptoSecureBankTokenNicAO6H.setOwner2.call(addressVOWN3uf, {from: accounts[2]});
		const boolk5xQlpK = await CryptoSecureBankTokenNicAO6H.getBlackListStatus.call(addressXWMFkrK, {from: accounts[4]});

		assert.equal(boolk5xQlpK, false)
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenv8bMGUR = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressXoAK7I = accounts[5]
		const uintGAijsXY = BigInt("1705")
		const addressTnFNFYP = accounts[5]
		const addresswHxeR3y = await CryptoSecureBankTokenv8bMGUR.addBlackList.call(addressXoAK7I, {from: accounts[4]});
		const boolFUgeRBr = await CryptoSecureBankTokenv8bMGUR.approve.call(addressTnFNFYP, uintGAijsXY, {from: accounts[4]});

		assert.equal(boolFUgeRBr, true)
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenuGFujOv = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressw9JAOg = accounts[0]
		const addressGTVi75u = accounts[4]
		const uintUPOo0N0 = BigInt("796")
		const addressTR4eRbr = accounts[1]
		const uintp1fGUxk = BigInt("87")
		const addressdJ7WS11 = accounts[5]
		const addressbhFMUzb = accounts[5]
		const addressj2spDOZ = accounts[1]
		const uintZj26OK3 = BigInt("47")
		const addressUGYBQhY = accounts[4]
		const uintZ0KS5ds = await CryptoSecureBankTokenuGFujOv.allowance.call(addressGTVi75u, addressw9JAOg, {from: accounts[2]});
		const boolWBCvvSC = await CryptoSecureBankTokenuGFujOv.transfer.call(addressTR4eRbr, uintUPOo0N0, {from: accounts[1]});
//		const boolYg0w5LV = await CryptoSecureBankTokenuGFujOv.transferFrom.call(addressbhFMUzb, addressdJ7WS11, uintp1fGUxk, {from: accounts[3]});
//		const addressxNprvZ = await CryptoSecureBankTokenuGFujOv.setOwner2.call(addressj2spDOZ, {from: accounts[4]});
//		const boolAsrPit6 = await CryptoSecureBankTokenuGFujOv.transfer.call(addressUGYBQhY, uintZj26OK3, {from: accounts[4]});

		assert.equal(boolWBCvvSC, true)
		assert.equal(uintZ0KS5ds, BigInt("0"))
		await expect(CryptoSecureBankTokenuGFujOv.transferFrom.call(addressbhFMUzb, addressdJ7WS11, uintp1fGUxk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenuGFujOv = await CryptoSecureBankToken.new({from: accounts[1]});
		const uintluAVpwk = BigInt("0")
		const addressIikJvSd = accounts[4]
		const addressEAO7HnS = "0x0000000000000000000000000000000000000001"
		const boolAsrPit6 = await CryptoSecureBankTokenuGFujOv.transfer.call(addressIikJvSd, uintluAVpwk, {from: accounts[4]});
//		const addressQz56wNS = await CryptoSecureBankTokenuGFujOv.setOwner2.call(addressEAO7HnS, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolAsrPit6, true)
		await expect(CryptoSecureBankTokenuGFujOv.setOwner2.call(addressEAO7HnS, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenuGFujOv = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressFdfb81l = accounts[2]
		const addressH6wdhuk = accounts[5]
		const addressM5J4Q6W = accounts[2]
		const addressfCFHeH5 = accounts[2]
		const uintB1rcCs = BigInt("1693")
		const addressNlfwh7a = accounts[1]
		const uintzvY5DWl = BigInt("1222")
		const uintpAjtMrN = BigInt("46")
		const addressENUx3rW = accounts[4]
		const addressgfEsy40 = accounts[1]
		const uintZ0KS5ds = await CryptoSecureBankTokenuGFujOv.allowance.call(addressH6wdhuk, addressFdfb81l, {from: accounts[2]});
		const uintBcZ0aS = await CryptoSecureBankTokenuGFujOv.balanceOf.call(addressM5J4Q6W, {from: accounts[2]});
		const address7BkPb2 = await CryptoSecureBankTokenuGFujOv.getOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolRXQn2Rm = await CryptoSecureBankTokenuGFujOv.getBlackListStatus.call(addressfCFHeH5, {from: accounts[4]});
		const boolij0PAwx = await CryptoSecureBankTokenuGFujOv.approve.call(addressNlfwh7a, uintB1rcCs, {from: accounts[2]});
		const boolTo7CJOB = await CryptoSecureBankTokenuGFujOv.redeem.call(uintzvY5DWl, {from: accounts[1]});
//		const boolAsrPit6 = await CryptoSecureBankTokenuGFujOv.transfer.call(addressENUx3rW, uintpAjtMrN, {from: accounts[4]});
//		const addressraVwNrn = await CryptoSecureBankTokenuGFujOv.addBlackList.call(addressgfEsy40, {from: accounts[3]});

		assert.equal(address7BkPb2, 0x6970a1a901d9a4CfB0355D60A1E1d71d5c449845)
		assert.equal(boolRXQn2Rm, false)
		assert.equal(boolTo7CJOB, true)
		assert.equal(boolij0PAwx, true)
		assert.equal(uintBcZ0aS, BigInt("0"))
		assert.equal(uintZ0KS5ds, BigInt("0"))
		await expect(CryptoSecureBankTokenuGFujOv.transfer.call(addressENUx3rW, uintpAjtMrN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenuZfi4Az = await CryptoSecureBankToken.new({from: accounts[5]});
		const addresshAK7zLi = accounts[0]
		const addressuQ3vu7q = accounts[0]
		const addressd6OhH3L = accounts[0]
		const addressi58QERB = await CryptoSecureBankTokenuZfi4Az.removeBlackList.call(addresshAK7zLi, {from: accounts[5]});
		const uintqMOqis = await CryptoSecureBankTokenuZfi4Az.allowance.call(addressd6OhH3L, addressuQ3vu7q, {from: accounts[5]});

		assert.equal(uintqMOqis, BigInt("0"))
	});
})