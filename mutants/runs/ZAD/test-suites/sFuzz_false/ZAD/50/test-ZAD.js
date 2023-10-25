const ZAD = artifacts.require("ZAD");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ZAD', (accounts) => {
	it('test for ZAD', async () => {
		const ZADkfmOFn = await ZAD.new({from: accounts[4]});
		const addressyjeS8ou = accounts[5]
		const uintc386Dbj = BigInt("614")
		const addressqNmiZfd = accounts[2]
		const uint256OikVJQJ = await ZADkfmOFn.totalSupply.call({from: accounts[3]});
		const uint256f8OIs5 = await ZADkfmOFn.balanceOf.call(addressyjeS8ou, {from: accounts[2]});
		const boolA7O15O = await ZADkfmOFn.approve.call(addressqNmiZfd, uintc386Dbj, {from: accounts[1]});

		assert.equal(boolA7O15O, true)
		assert.equal(uint256OikVJQJ, BigInt("100000000000000000000000000"))
		assert.equal(uint256f8OIs5, BigInt("0"))
	});

	it('test for ZAD', async () => {
		const ZADDDhlIVO = await ZAD.new({from: "0x0000000000000000000000000000000000000001"});
		const uintNTPKkC4 = BigInt("239")
		const addressxfwvkk = accounts[1]
		const uintm2UYKzO = BigInt("1854")
		const uintkex2MRe = BigInt("947")
		const addressOEL8wno = accounts[1]
		const uintq94Lwt4 = BigInt("140")
		const addressL7iu79a = accounts[1]
		const addresso8ZlET = accounts[3]
		const address9LWVUz = accounts[1]
		const boolyLXIalU = await ZADDDhlIVO.transfer.call(addressxfwvkk, uintNTPKkC4, {from: accounts[4]});
		const stringrb6FL1K = await ZADDDhlIVO.name.call({from: accounts[0]});
		const uint256yEaESmM = await ZADDDhlIVO._burn.call(uintm2UYKzO, {from: accounts[3]});
		const boolU8LSgNQ = await ZADDDhlIVO.increaseAllowance.call(addressOEL8wno, uintkex2MRe, {from: "0x0000000000000000000000000000000000000001"});
		const boolf3TainS = await ZADDDhlIVO.approve.call(addressL7iu79a, uintq94Lwt4, {from: accounts[1]});
		const uint256r1GkiHi = await ZADDDhlIVO.allowance.call(address9LWVUz, addresso8ZlET, {from: accounts[3]});
	});

	it('test for ZAD', async () => {
		const ZADJ48lklQ = await ZAD.new({from: accounts[3]});
		const uinttI68xn5 = BigInt("1881")
		const addressSXj4Myn = accounts[3]
		const addresscPsS3G = accounts[2]
		const addressbbrZePa = accounts[1]
		const uintEWfEtDB = BigInt("713")
		const addressXEmY6sj = accounts[2]
		const addressHJOPbXX = accounts[2]
		const addressGYecB98 = "0x0000000000000000000000000000000000000001"
		const address2Iu3sR = accounts[4]
		const addressz48Bvu2 = accounts[4]
		const boolz5Q5mqv = await ZADJ48lklQ.approve.call(addressSXj4Myn, uinttI68xn5, {from: accounts[1]});
		const uint256TDgNGIg = await ZADJ48lklQ.allowance.call(addressbbrZePa, addresscPsS3G, {from: accounts[0]});
		const boolUOiSav0 = await ZADJ48lklQ.decreaseAllowance.call(addressXEmY6sj, uintEWfEtDB, {from: accounts[5]});
		const uint256rxqTtHl = await ZADJ48lklQ.allowance.call(addressGYecB98, addressHJOPbXX, {from: accounts[3]});
		const uint256R2QPOuY = await ZADJ48lklQ.totalSupply.call({from: accounts[4]});
		const uint256QGGTMnv = await ZADJ48lklQ.allowance.call(addressz48Bvu2, address2Iu3sR, {from: accounts[0]});

		assert.equal(boolz5Q5mqv, true)
		assert.equal(uint256TDgNGIg, BigInt("0"))
		await expect(ZADJ48lklQ.decreaseAllowance.call(addressXEmY6sj, uintEWfEtDB, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADcP4O9x = await ZAD.new({from: accounts[3]});
		const uinttopmdG4 = BigInt("631")
		const addressaaZmasG = accounts[2]
		const addressEzr4QE7 = accounts[1]
		const uintiVAY9ly = BigInt("476")
		const addressHSxOXx0 = accounts[2]
		const uintfOW5Hfz = BigInt("403")
		const addresspr5ZfrX = accounts[1]
		const boolEtKNVoA = await ZADcP4O9x.transferFrom.call(addressEzr4QE7, addressaaZmasG, uinttopmdG4, {from: accounts[1]});
		const stringXuPdFu2 = await ZADcP4O9x.symbol.call({from: accounts[0]});
		const stringBQlAV5F = await ZADcP4O9x.symbol.call({from: accounts[1]});
		const uint256egyCWch = await ZADcP4O9x.totalSupply.call({from: accounts[3]});
		const boolxBdpjw = await ZADcP4O9x.transfer.call(addressHSxOXx0, uintiVAY9ly, {from: accounts[3]});
		const boolzDPZZC3 = await ZADcP4O9x.decreaseAllowance.call(addresspr5ZfrX, uintfOW5Hfz, {from: accounts[1]});

		await expect(ZADcP4O9x.transferFrom.call(addressEzr4QE7, addressaaZmasG, uinttopmdG4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADFgTfXFZ = await ZAD.new({from: accounts[3]});
		const addressTjaOUwM = accounts[2]
		const addresszxsM0jF = accounts[5]
		const uintcwITCbm = BigInt("733")
		const addressv7wUEfe = accounts[3]
		const addressgsG24Tm = accounts[2]
		const addressiHAmKwB = accounts[2]
		const uintKDw4g6 = BigInt("228")
		const addressBBZTEP = accounts[1]
		const addressXuWof91 = accounts[5]
		const uint256KuigWJy = await ZADFgTfXFZ.allowance.call(addresszxsM0jF, addressTjaOUwM, {from: accounts[3]});
		const bool1zMgra = await ZADFgTfXFZ.transfer.call(addressv7wUEfe, uintcwITCbm, {from: accounts[2]});
		const uint256MSgF3hk = await ZADFgTfXFZ.allowance.call(addressiHAmKwB, addressgsG24Tm, {from: accounts[1]});
		const stringwZlWX4P = await ZADFgTfXFZ.symbol.call({from: accounts[1]});
		const boolzIqJA3t = await ZADFgTfXFZ.transferFrom.call(addressXuWof91, addressBBZTEP, uintKDw4g6, {from: accounts[1]});
		const uint256llHZevE = await ZADFgTfXFZ.totalSupply.call({from: accounts[1]});

		assert.equal(uint256KuigWJy, BigInt("0"))
		await expect(ZADFgTfXFZ.transfer.call(addressv7wUEfe, uintcwITCbm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADe41ATPL = await ZAD.new({from: accounts[0]});
		const addresshvnDVYz = accounts[3]
		const addressso6FlN = accounts[3]
		const uint8mSj1nWG = await ZADe41ATPL.decimals.call({from: accounts[1]});
		const stringjM7lyOM = await ZADe41ATPL.symbol.call({from: accounts[0]});
		const uint256xyf4V5p = await ZADe41ATPL.allowance.call(addressso6FlN, addresshvnDVYz, {from: accounts[0]});
		const uint256TBqSTO4 = await ZADe41ATPL.totalSupply.call({from: accounts[5]});

		assert.equal(stringjM7lyOM, "ZAD")
		assert.equal(uint256TBqSTO4, BigInt("100000000000000000000000000"))
		assert.equal(uint256xyf4V5p, BigInt("0"))
		assert.equal(uint8mSj1nWG, BigInt("18"))
	});

	it('test for ZAD', async () => {
		const ZADGJeDZ52 = await ZAD.new({from: accounts[3]});
		const uintaDhDR9h = BigInt("282")
		const addressjikkvGW = accounts[5]
		const addressPotsSs = accounts[2]
		const uintCYqikA5 = BigInt("1120")
		const addressam7nQV6 = accounts[2]
		const boolHCjX8VG = await ZADGJeDZ52.increaseAllowance.call(addressjikkvGW, uintaDhDR9h, {from: accounts[1]});
		const stringR1uGpF = await ZADGJeDZ52.symbol.call({from: accounts[2]});
		const uint256Est111T = await ZADGJeDZ52.balanceOf.call(addressPotsSs, {from: "0x0000000000000000000000000000000000000001"});
		const booldDagKw9 = await ZADGJeDZ52.increaseAllowance.call(addressam7nQV6, uintCYqikA5, {from: accounts[1]});

		assert.equal(boolHCjX8VG, true)
		assert.equal(booldDagKw9, true)
		assert.equal(stringR1uGpF, "ZAD")
		assert.equal(uint256Est111T, BigInt("0"))
	});

	it('test for ZAD', async () => {
		const ZADkfmOFn = await ZAD.new({from: accounts[4]});
		const addressmcgRBK5 = accounts[6]
		const uintZDYmwBD = BigInt("605")
		const addresspuYNPy = accounts[4]
		const uintfAa4By = BigInt("468")
		const addressmgAV00J = accounts[5]
		const uintoFzkdfK = BigInt("614")
		const addressDcSjfmy = accounts[2]
		const uint256OikVJQJ = await ZADkfmOFn.totalSupply.call({from: accounts[3]});
		const stringUnAkjY = await ZADkfmOFn.name.call({from: accounts[3]});
		const uint256f8OIs5 = await ZADkfmOFn.balanceOf.call(addressmcgRBK5, {from: accounts[2]});
		const boolGtEPCB = await ZADkfmOFn.transfer.call(addresspuYNPy, uintZDYmwBD, {from: accounts[2]});
		const boolqjtFRsP = await ZADkfmOFn.transfer.call(addressmgAV00J, uintfAa4By, {from: accounts[2]});
		const boolA7O15O = await ZADkfmOFn.approve.call(addressDcSjfmy, uintoFzkdfK, {from: accounts[1]});

		assert.equal(stringUnAkjY, "Zadkiel")
		assert.equal(uint256OikVJQJ, BigInt("100000000000000000000000000"))
		assert.equal(uint256f8OIs5, BigInt("0"))
		await expect(ZADkfmOFn.transfer.call(addresspuYNPy, uintZDYmwBD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADkfmOFn = await ZAD.new({from: accounts[4]});
		const uintleYsTdh = BigInt("1860")
		const uintINPPx5 = BigInt("1194")
		const addresssVbLolT = accounts[1]
		const addressSOPyvg2 = "0x0000000000000000000000000000000000000001"
		const addressbnwA9bg = accounts[6]
		const uint256YzbqeZN = await ZADkfmOFn._burn.call(uintleYsTdh, {from: accounts[5]});
		const uint256OikVJQJ = await ZADkfmOFn.totalSupply.call({from: accounts[3]});
		const booliIiY7wi = await ZADkfmOFn.transferFrom.call(addressSOPyvg2, addresssVbLolT, uintINPPx5, {from: accounts[3]});
		const uint256f8OIs5 = await ZADkfmOFn.balanceOf.call(addressbnwA9bg, {from: accounts[2]});

		await expect(ZADkfmOFn._burn.call(uintleYsTdh, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})