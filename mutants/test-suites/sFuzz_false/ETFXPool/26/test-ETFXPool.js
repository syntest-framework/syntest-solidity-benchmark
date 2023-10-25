const ETFXPool = artifacts.require("ETFXPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ETFXPool', (accounts) => {
	it('test for ETFXPool', async () => {
		const stringppXBdUu = "yLinFUKU2QvVF4z9EXEqF4P"
		const stringIACjetg = "NSpBJ8mutI5yTuekSF4jBCHpJunzkUL"
		const uintUutZdTR = BigInt("161")
		const ETFXPoolvi6KOZI = await ETFXPool.new(stringppXBdUu, stringIACjetg, uintUutZdTR, {from: accounts[4]});
		const addressSjb5Y7 = accounts[3]
		const addressyX01JxH = accounts[2]
		const uintJnnVPUk = BigInt("877")
		const addressD0DqO0h = "0x0000000000000000000000000000000000000001"
		const uintbItCBNo = BigInt("119")
		const address6cL3j9 = accounts[5]
		const uintQyLWmz = BigInt("1296")
		const uint256mpsyiOh = await ETFXPoolvi6KOZI.earned.call(addressSjb5Y7, {from: accounts[2]});
		const uint256QuW9qeM = await ETFXPoolvi6KOZI.earned.call(addressyX01JxH, {from: accounts[0]});
		const address3JTaey = await ETFXPoolvi6KOZI.owner.call({from: accounts[3]});
		const boolVym1FoR = await ETFXPoolvi6KOZI.approve.call(addressD0DqO0h, uintJnnVPUk, {from: "0x0000000000000000000000000000000000000001"});
		const boolxSEuyH2 = await ETFXPoolvi6KOZI.decreaseAllowance.call(address6cL3j9, uintbItCBNo, {from: accounts[4]});
		const uint256RIXCGtl = await ETFXPoolvi6KOZI.stake.call(uintQyLWmz, {from: accounts[0]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolVHI79cp = await ETFXPool.new({from: accounts[1]});
		const uint3voQHJ = BigInt("1062")
		const addressehXwu7R = accounts[0]
		const addressXfSghr2 = accounts[5]
		const addressx4UK6dl = accounts[1]
		const addressPvrWgZG = accounts[0]
//		const boolisJQvRS = await ETFXPoolVHI79cp.transfer.call(addressehXwu7R, uint3voQHJ, {from: accounts[1]});
//		const addressE2NHHMP = await ETFXPoolVHI79cp.transferOwnership.call(addressXfSghr2, {from: accounts[2]});
//		const uint256ZxC8Rqp = await ETFXPoolVHI79cp.allowance.call(addressPvrWgZG, addressx4UK6dl, {from: accounts[2]});

		await expect(ETFXPoolVHI79cp.transfer.call(addressehXwu7R, uint3voQHJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolhZVvYqU = await ETFXPool.new({from: accounts[3]});
		const uintyCGL3ue = BigInt("1375")
		const addressHyTaYth = accounts[4]
		const uintN3wHlia = BigInt("450")
		const addressjizZK5 = await ETFXPoolhZVvYqU.owner.call({from: accounts[1]});
		const boolXSjMB1P = await ETFXPoolhZVvYqU.approve.call(addressHyTaYth, uintyCGL3ue, {from: accounts[1]});
//		const uint256rODlZn = await ETFXPoolhZVvYqU.withdraw.call(uintN3wHlia, {from: accounts[2]});
//		const uint8rsgKqwf = await ETFXPoolhZVvYqU.decimals.call({from: accounts[4]});

		assert.equal(addressjizZK5, 0x093366154eAE1ab6edDf11afa1D98945f20f4703)
		assert.equal(boolXSjMB1P, true)
		await expect(ETFXPoolhZVvYqU.withdraw.call(uintN3wHlia, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolyZuuBNf = await ETFXPool.new({from: accounts[0]});
		const uintejjWoIn = BigInt("1668")
		const addressjrte9xd = accounts[4]
//		await ETFXPoolyZuuBNf.exit.call({from: accounts[3]});
//		await ETFXPoolyZuuBNf.nonReentrant.call({from: accounts[0]});
//		const boolf8db3OM = await ETFXPoolyZuuBNf.decreaseAllowance.call(addressjrte9xd, uintejjWoIn, {from: accounts[4]});
//		await ETFXPoolyZuuBNf.exit.call({from: accounts[1]});
//		const stringplwKvE = await ETFXPoolyZuuBNf.name.call({from: accounts[2]});

		await expect(ETFXPoolyZuuBNf.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoole5AV4sr = await ETFXPool.new({from: "0x0000000000000000000000000000000000000001"});
		const uintEorX4jX = BigInt("1558")
		const addressKhF90lB = accounts[1]
		const uintgj89puC = BigInt("493")
		const addresseQJSXBk = accounts[3]
		const boolKIlwPM0 = await ETFXPoole5AV4sr.increaseAllowance.call(addressKhF90lB, uintEorX4jX, {from: accounts[2]});
		const boolcxaayk6 = await ETFXPoole5AV4sr.transfer.call(addresseQJSXBk, uintgj89puC, {from: accounts[2]});
		const stringHfAHuJM = await ETFXPoole5AV4sr.symbol.call({from: accounts[4]});
		const uint256sGaYxPl = await ETFXPoole5AV4sr.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolhZVvYqU = await ETFXPool.new({from: accounts[3]});
		const uintK4qip8K = BigInt("1375")
		const addressMjdp3I = accounts[4]
		const addressjizZK5 = await ETFXPoolhZVvYqU.owner.call({from: accounts[1]});
		const boolXSjMB1P = await ETFXPoolhZVvYqU.approve.call(addressMjdp3I, uintK4qip8K, {from: accounts[1]});
		const uint8rsgKqwf = await ETFXPoolhZVvYqU.decimals.call({from: accounts[4]});

		assert.equal(addressjizZK5, 0x093366154eAE1ab6edDf11afa1D98945f20f4703)
		assert.equal(boolXSjMB1P, true)
		assert.equal(uint8rsgKqwf, BigInt("8"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolYWshSqZ = await ETFXPool.new({from: accounts[4]});
		const uintfB061pb = BigInt("489")
		const addressdYQVDM7 = accounts[2]
		const uintM8r2o8I = BigInt("1464")
		const addressuVJJqRD = accounts[1]
		const uintgttkNiG = BigInt("1062")
//		await ETFXPoolYWshSqZ.nonReentrant.call({from: accounts[0]});
//		const booliv9mwfc = await ETFXPoolYWshSqZ.increaseAllowance.call(addressdYQVDM7, uintfB061pb, {from: accounts[4]});
//		const uint256ds6lJDg = await ETFXPoolYWshSqZ.stake.call(uintM8r2o8I, {from: accounts[3]});
//		const uint256XyFsfuJ = await ETFXPoolYWshSqZ.balanceOf.call(addressuVJJqRD, {from: accounts[4]});
//		const uint256FOXhvS0 = await ETFXPoolYWshSqZ.stake.call(uintgttkNiG, {from: accounts[0]});

		await expect(ETFXPoolYWshSqZ.nonReentrant.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolVHI79cp = await ETFXPool.new({from: accounts[1]});
		const addressv0C3nw9 = accounts[5]
		const addresssOv42i1 = accounts[1]
		const addressOP2mPpF = accounts[1]
//		const addressE2NHHMP = await ETFXPoolVHI79cp.transferOwnership.call(addressv0C3nw9, {from: accounts[2]});
//		const uint256ZxC8Rqp = await ETFXPoolVHI79cp.allowance.call(addressOP2mPpF, addresssOv42i1, {from: accounts[2]});

		await expect(ETFXPoolVHI79cp.transferOwnership.call(addressv0C3nw9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPool5RaNev = await ETFXPool.new({from: accounts[1]});
		const uinte5UFS0V = BigInt("683")
		const addressTmgrX1 = accounts[2]
		const addressb4ruLo = accounts[5]
		const addressb1caLpQ = accounts[4]
		const addressl5gmtL3 = accounts[4]
//		const booli64rd7N = await ETFXPool5RaNev.transferFrom.call(addressb4ruLo, addressTmgrX1, uinte5UFS0V, {from: accounts[0]});
//		const uint256H2T4QAN = await ETFXPool5RaNev.allowance.call(addressl5gmtL3, addressb1caLpQ, {from: accounts[4]});

		await expect(ETFXPool5RaNev.transferFrom.call(addressb4ruLo, addressTmgrX1, uinte5UFS0V, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolVHI79cp = await ETFXPool.new({from: accounts[1]});
		const uinttVBHRB = BigInt("1446")
		const addressPY0O8TV = accounts[2]
		const uintTk5Y8z = BigInt("816")
		const addressDXnYUqj = accounts[3]
		const addressJuEPflF = accounts[0]
		const addressHLJtBjI = accounts[5]
		const boolML5OwL = await ETFXPoolVHI79cp.approve.call(addressPY0O8TV, uinttVBHRB, {from: accounts[2]});
//		const boolsmvnDB = await ETFXPoolVHI79cp.decreaseAllowance.call(addressDXnYUqj, uintTk5Y8z, {from: accounts[3]});
//		const uint256X7XJ9i = await ETFXPoolVHI79cp.earned.call(addressJuEPflF, {from: accounts[3]});
//		const addressE2NHHMP = await ETFXPoolVHI79cp.transferOwnership.call(addressHLJtBjI, {from: accounts[2]});

		assert.equal(boolML5OwL, true)
		await expect(ETFXPoolVHI79cp.decreaseAllowance.call(addressDXnYUqj, uintTk5Y8z, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolVHI79cp = await ETFXPool.new({from: accounts[1]});
		const uintQ6rTxfn = BigInt("145")
		const addressjlKtpb = accounts[1]
		const addressG1oIoZu = accounts[6]
		const stringSXhxodi = await ETFXPoolVHI79cp.name.call({from: accounts[0]});
//		const boolQzlf57q = await ETFXPoolVHI79cp.decreaseAllowance.call(addressjlKtpb, uintQ6rTxfn, {from: accounts[1]});
//		const addressE2NHHMP = await ETFXPoolVHI79cp.transferOwnership.call(addressG1oIoZu, {from: accounts[2]});

		assert.equal(stringSXhxodi, "ETFX-FARM")
		await expect(ETFXPoolVHI79cp.decreaseAllowance.call(addressjlKtpb, uintQ6rTxfn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolVHI79cp = await ETFXPool.new({from: accounts[1]});
		const addressjlOfaMn = await ETFXPoolVHI79cp.owner.call({from: accounts[1]});
//		await ETFXPoolVHI79cp.getReward.call({from: accounts[0]});

		assert.equal(addressjlOfaMn, 0x0904c6FA7dB32AD77730Eb1e798C244aC16475EC)
		await expect(ETFXPoolVHI79cp.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolVHI79cp = await ETFXPool.new({from: accounts[1]});
		const uintkQvNGGG = BigInt("299")
		const addressSSrgbAP = accounts[2]
		const addressz15KGaZ = accounts[5]
		const addressZFqXzqx = accounts[1]
		const addressL9eelxw = accounts[1]
		const addressuDSkjmR = accounts[4]
		const addressXS6SHdp = accounts[6]
		const boolZeRIWfO = await ETFXPoolVHI79cp.approve.call(addressSSrgbAP, uintkQvNGGG, {from: accounts[4]});
		const uint256tg2Ozrm = await ETFXPoolVHI79cp.balanceOf.call(addressz15KGaZ, {from: accounts[3]});
		const uint256UiasTSP = await ETFXPoolVHI79cp.allowance.call(addressL9eelxw, addressZFqXzqx, {from: accounts[1]});
//		const uint256Rl9JRhm = await ETFXPoolVHI79cp.earned.call(addressuDSkjmR, {from: accounts[0]});
//		const addressE2NHHMP = await ETFXPoolVHI79cp.transferOwnership.call(addressXS6SHdp, {from: accounts[2]});

		assert.equal(boolZeRIWfO, true)
		assert.equal(uint256UiasTSP, BigInt("0"))
		assert.equal(uint256tg2Ozrm, BigInt("0"))
		await expect(ETFXPoolVHI79cp.earned.call(addressuDSkjmR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolVHI79cp = await ETFXPool.new({from: accounts[1]});
		const uintJ9a6CK3 = BigInt("1149")
		const addressDX2ddPs = accounts[2]
		const addressZviuqo = accounts[5]
		const addresst27mVsK = accounts[0]
		const addressEL1iIRq = accounts[2]
		const stringmJg2JB7 = await ETFXPoolVHI79cp.symbol.call({from: accounts[3]});
		const boolxPofiD5 = await ETFXPoolVHI79cp.increaseAllowance.call(addressDX2ddPs, uintJ9a6CK3, {from: accounts[1]});
//		const addressE2NHHMP = await ETFXPoolVHI79cp.transferOwnership.call(addressZviuqo, {from: accounts[2]});
//		const uint256Yzqp7y5 = await ETFXPoolVHI79cp.allowance.call(addressEL1iIRq, addresst27mVsK, {from: accounts[1]});

		assert.equal(boolxPofiD5, true)
		assert.equal(stringmJg2JB7, "FETFX")
		await expect(ETFXPoolVHI79cp.transferOwnership.call(addressZviuqo, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolVHI79cp = await ETFXPool.new({from: accounts[1]});
		const uintSHmEdTd = BigInt("1650")
		const addressApA2rie = accounts[5]
//		const uint256FxGDX6W = await ETFXPoolVHI79cp.stake.call(uintSHmEdTd, {from: accounts[2]});
//		const addressE2NHHMP = await ETFXPoolVHI79cp.transferOwnership.call(addressApA2rie, {from: accounts[2]});

		await expect(ETFXPoolVHI79cp.stake.call(uintSHmEdTd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolVHI79cp = await ETFXPool.new({from: accounts[1]});
		const addressSNeBwtp = accounts[7]
		const uint256lnrhajS = await ETFXPoolVHI79cp.rewardPerToken.call({from: accounts[0]});
		const uint256oKMpiV = await ETFXPoolVHI79cp.rewardPerToken.call({from: accounts[2]});
//		const addressE2NHHMP = await ETFXPoolVHI79cp.transferOwnership.call(addressSNeBwtp, {from: accounts[2]});

		assert.equal(uint256lnrhajS, BigInt("0"))
		assert.equal(uint256oKMpiV, BigInt("0"))
		await expect(ETFXPoolVHI79cp.transferOwnership.call(addressSNeBwtp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolVHI79cp = await ETFXPool.new({from: accounts[1]});
		const addressGuVBetI = accounts[1]
		const addressBj0hPDp = accounts[0]
		const uint256lnrhajS = await ETFXPoolVHI79cp.rewardPerToken.call({from: accounts[0]});
		const addressDNLMAme = await ETFXPoolVHI79cp.transferOwnership.call(addressGuVBetI, {from: accounts[1]});
		const uint256XWtopfE = await ETFXPoolVHI79cp.balanceOf.call(addressBj0hPDp, {from: accounts[4]});

		assert.equal(uint256XWtopfE, BigInt("0"))
		assert.equal(uint256lnrhajS, BigInt("0"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolVHI79cp = await ETFXPool.new({from: accounts[1]});
		const addressMUJr8Z6 = accounts[7]
//		await ETFXPoolVHI79cp.renounceOwnership.call({from: accounts[1]});
//		const addressE2NHHMP = await ETFXPoolVHI79cp.transferOwnership.call(addressMUJr8Z6, {from: accounts[2]});

		await expect(ETFXPoolVHI79cp.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})