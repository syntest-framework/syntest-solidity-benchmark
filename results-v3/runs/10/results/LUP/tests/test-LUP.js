const LUP = artifacts.require("LUP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LUP', (accounts) => {
	it('test for LUP', async () => {
		const stringiJgpGi = "yuysIldA7Hz8ysi2LEkuG3s2V2PLCt9y4j4Dq9YhBWw8NRUP5t5B3WsMYhfB7Hpfu0HpigY2tKPObo8N"
		const stringHy93OW = "9u4gGpHrvDglBx3ZI167bjIpWMpokouPtLz5niWhIFBQjLke5s4kFMWaqtOuiVkNudHz"
		const uintCPQhr7s = BigInt("192")
		const LUPnbD3OVn = await LUP.new(stringiJgpGi, stringHy93OW, uintCPQhr7s, {from: accounts[5]});
		const uintB0uWsE = BigInt("670")
		const uintJg8yPp4 = BigInt("110")
		const addressPz81FMm = "0x0000000000000000000000000000000000000001"
		const addressnMA0aFA = accounts[3]
		const boolC1EfuXG = await LUPnbD3OVn.transferWithLock.call(addressPz81FMm, uintJg8yPp4, uintB0uWsE, {from: accounts[0]});
		const uint256X1RVdbq = await LUPnbD3OVn.balanceOf.call(addressnMA0aFA, {from: accounts[4]});
	});

	it('test for LUP', async () => {
		const LUPbDJTFRD = await LUP.new({from: accounts[5]});
		const uintLsJal0K = BigInt("536")
		const addressq4ffRxO = accounts[2]
		const booldRa01TH = false
		const addresstLiSdA5 = accounts[5]
		const uint8pLWU7kW = await LUPbDJTFRD.decimals.call({from: accounts[2]});
		const boolPipjqs1 = await LUPbDJTFRD.transfer.call(addressq4ffRxO, uintLsJal0K, {from: accounts[0]});
		const boolt9e5so = await LUPbDJTFRD.freezeAccount.call(addresstLiSdA5, booldRa01TH, {from: accounts[2]});

		assert.equal(uint8pLWU7kW, BigInt("18"))
		await expect(LUPbDJTFRD.transfer.call(addressq4ffRxO, uintLsJal0K, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPfTBikpM = await LUP.new({from: accounts[4]});
		const uintVJyLbA4 = BigInt("102")
		const addressqONYJj8 = accounts[0]
		const uintAvOKwue = BigInt("790")
		const addressBlO01PW = "0x0000000000000000000000000000000000000001"
		const addressg0ozU5X = accounts[3]
		const uinteGGZbw0 = BigInt("2016")
		const uintF3zbBgr = BigInt("2029")
		const addressxlcSeJD = accounts[1]
		const uintUFlNLS6 = BigInt("624")
		const uintVCNNymB = BigInt("1389")
		const addressqlPF6Va = accounts[5]
		const boolQfZV8B3 = await LUPfTBikpM.transfer.call(addressqONYJj8, uintVJyLbA4, {from: accounts[4]});
		const boolW9mpStW = await LUPfTBikpM.unlock.call(addressBlO01PW, uintAvOKwue, {from: accounts[0]});
		const stringmLM6fB7 = await LUPfTBikpM.symbol.call({from: accounts[1]});
		const uint256i0BtgLV = await LUPfTBikpM.balanceOf.call(addressg0ozU5X, {from: accounts[1]});
		const boolLMYwu14 = await LUPfTBikpM.transferWithLock.call(addressxlcSeJD, uintF3zbBgr, uinteGGZbw0, {from: accounts[2]});
		const boolw17eRal = await LUPfTBikpM.transferWithLock.call(addressqlPF6Va, uintVCNNymB, uintUFlNLS6, {from: accounts[3]});

		assert.equal(boolQfZV8B3, true)
		await expect(LUPfTBikpM.unlock.call(addressBlO01PW, uintAvOKwue, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPMCAx7Bp = await LUP.new({from: "0x0000000000000000000000000000000000000001"});
		const uintirnKtbx = BigInt("65")
		const addressU5WL9AT = accounts[0]
		const uintmbZbZwB = BigInt("652")
		const addressUO5dRBD = accounts[1]
		const boolKfG9iFN = false
		const address17bhAe = accounts[2]
		const stringjYnXVFn = await LUPMCAx7Bp.name.call({from: accounts[1]});
		const stringkNc38pr = await LUPMCAx7Bp.name.call({from: accounts[4]});
		const boolbizopU = await LUPMCAx7Bp.unlock.call(addressU5WL9AT, uintirnKtbx, {from: accounts[2]});
		const boolgghRkf = await LUPMCAx7Bp.transfer.call(addressUO5dRBD, uintmbZbZwB, {from: accounts[4]});
		const boolDLTqv1 = await LUPMCAx7Bp.freezeAccount.call(address17bhAe, boolKfG9iFN, {from: accounts[1]});
	});

	it('test for LUP', async () => {
		const LUPu05rjF7 = await LUP.new({from: accounts[3]});
		const addressMXV7lQn = accounts[2]
		const uintrzcEkt = BigInt("1640")
		const uintQXAxWq = BigInt("1571")
		const addressfVmpyVO = accounts[2]
		const addressm3hU5u1 = accounts[2]
		const addressB8I64Ps = accounts[5]
		const uint256QOk58cG = await LUPu05rjF7.balanceOf.call(addressMXV7lQn, {from: accounts[0]});
		const stringCzqHgC = await LUPu05rjF7.name.call({from: accounts[0]});
		const boolic0hVif = await LUPu05rjF7.lock.call(addressfVmpyVO, uintQXAxWq, uintrzcEkt, {from: accounts[1]});
		const addressUVhodxL = await LUPu05rjF7.notFrozen.call(addressm3hU5u1, {from: accounts[3]});
		const addressq1qkwdM = await LUPu05rjF7.notFrozen.call(addressB8I64Ps, {from: accounts[3]});

		assert.equal(stringCzqHgC, "LINKUP Token")
		assert.equal(uint256QOk58cG, BigInt("0"))
		await expect(LUPu05rjF7.lock.call(addressfVmpyVO, uintQXAxWq, uintrzcEkt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPu05rjF7 = await LUP.new({from: accounts[3]});
		const addressRn72R9A = accounts[2]
		const addressMV9aQm = accounts[1]
		const uintK65zG5j = BigInt("1640")
		const uintnyiwFnh = BigInt("1571")
		const addressJWYt4gu = accounts[2]
		const addressLKiOPBe = accounts[3]
		const addresshOIvNTu = accounts[5]
		const uint256QOk58cG = await LUPu05rjF7.balanceOf.call(addressRn72R9A, {from: accounts[0]});
		const stringCzqHgC = await LUPu05rjF7.name.call({from: accounts[0]});
		const addressCsCWC0h = await LUPu05rjF7.notFrozen.call(addressMV9aQm, {from: accounts[0]});
		const boolic0hVif = await LUPu05rjF7.lock.call(addressJWYt4gu, uintnyiwFnh, uintK65zG5j, {from: accounts[1]});
		const addressUVhodxL = await LUPu05rjF7.notFrozen.call(addressLKiOPBe, {from: accounts[3]});
		const addressq1qkwdM = await LUPu05rjF7.notFrozen.call(addresshOIvNTu, {from: accounts[3]});

		assert.equal(stringCzqHgC, "LINKUP Token")
		assert.equal(uint256QOk58cG, BigInt("0"))
		await expect(LUPu05rjF7.notFrozen.call(addressMV9aQm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPbDJTFRD = await LUP.new({from: accounts[5]});
		const uintXvYAxRG = BigInt("536")
		const addressSwJu10T = accounts[2]
		const booldRa01TH = false
		const addressVi7goo = accounts[5]
		const uint8pLWU7kW = await LUPbDJTFRD.decimals.call({from: accounts[2]});
		const stringzZFfE5X = await LUPbDJTFRD.symbol.call({from: accounts[0]});
		const stringaT9dItu = await LUPbDJTFRD.symbol.call({from: accounts[5]});
		const boolPipjqs1 = await LUPbDJTFRD.transfer.call(addressSwJu10T, uintXvYAxRG, {from: accounts[0]});
		const boolt9e5so = await LUPbDJTFRD.freezeAccount.call(addressVi7goo, booldRa01TH, {from: accounts[2]});

		assert.equal(stringaT9dItu, "LUP")
		assert.equal(stringzZFfE5X, "LUP")
		assert.equal(uint8pLWU7kW, BigInt("18"))
		await expect(LUPbDJTFRD.transfer.call(addressSwJu10T, uintXvYAxRG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPu05rjF7 = await LUP.new({from: accounts[3]});
		const address2oWfmQ = accounts[1]
		const addressVKKwT2 = accounts[2]
		const uinteylcV2q = BigInt("1640")
		const uintEfXz6gy = BigInt("1571")
		const addressZfPL3Jw = accounts[2]
		const addressYIidgWY = accounts[2]
		const boolaQbtLLm = true
		const addressFn2O4Pa = accounts[5]
		const uintE4UJ8lw = BigInt("68")
		const addresssotsJF1 = accounts[0]
		const addressH8UR8A3 = accounts[5]
		const addressMvukqTX = await LUPu05rjF7.upgradeTo.call(address2oWfmQ, {from: accounts[4]});
		const uint256QOk58cG = await LUPu05rjF7.balanceOf.call(addressVKKwT2, {from: accounts[0]});
		const boolic0hVif = await LUPu05rjF7.lock.call(addressZfPL3Jw, uintEfXz6gy, uinteylcV2q, {from: accounts[1]});
		const addressUVhodxL = await LUPu05rjF7.notFrozen.call(addressYIidgWY, {from: accounts[3]});
		const boolb9iPOc = await LUPu05rjF7.freezeAccount.call(addressFn2O4Pa, boolaQbtLLm, {from: accounts[4]});
		const boolTU03wEm = await LUPu05rjF7.transfer.call(addresssotsJF1, uintE4UJ8lw, {from: accounts[2]});
		const addressq1qkwdM = await LUPu05rjF7.notFrozen.call(addressH8UR8A3, {from: accounts[3]});

		await expect(LUPu05rjF7.upgradeTo.call(address2oWfmQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPbDJTFRD = await LUP.new({from: accounts[5]});
		const boolACWkwFa = false
		const addressGHDASCq = accounts[3]
		const uintwQfJsKx = BigInt("536")
		const addressbQC4ZO = accounts[2]
		const uintcSkI5pq = BigInt("53")
		const uintP0ejm14 = BigInt("520")
		const addresskO09uvM = accounts[4]
		const boolF7Mda0i = await LUPbDJTFRD.freezeAccount.call(addressGHDASCq, boolACWkwFa, {from: accounts[5]});
		const boolPipjqs1 = await LUPbDJTFRD.transfer.call(addressbQC4ZO, uintwQfJsKx, {from: accounts[0]});
		const boolIM1jhkl = await LUPbDJTFRD.transferWithLock.call(addresskO09uvM, uintP0ejm14, uintcSkI5pq, {from: accounts[3]});

		assert.equal(boolF7Mda0i, true)
		await expect(LUPbDJTFRD.transfer.call(addressbQC4ZO, uintwQfJsKx, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPbDJTFRD = await LUP.new({from: accounts[5]});
		const uintONHY2dO = BigInt("1160")
		const uintRkF1cNU = BigInt("1028")
		const addressgN1dq6 = accounts[2]
		const addressnVbSCqA = accounts[2]
		const addresslbqk7kq = accounts[1]
		const uintmdydk5T = BigInt("536")
		const addressOngX54a = accounts[3]
		const boolOiy5jgD = await LUPbDJTFRD.transferWithLock.call(addressgN1dq6, uintRkF1cNU, uintONHY2dO, {from: accounts[5]});
		const uint256saMn62G = await LUPbDJTFRD.balanceOf.call(addressnVbSCqA, {from: accounts[4]});
		const addressR2R9E4o = await LUPbDJTFRD.notFrozen.call(addresslbqk7kq, {from: "0x0000000000000000000000000000000000000001"});
		const boolPipjqs1 = await LUPbDJTFRD.transfer.call(addressOngX54a, uintmdydk5T, {from: accounts[0]});

		assert.equal(boolOiy5jgD, true)
		assert.equal(uint256saMn62G, BigInt("0"))
		await expect(LUPbDJTFRD.notFrozen.call(addresslbqk7kq, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPbDJTFRD = await LUP.new({from: accounts[5]});
		const uintAFid8iI = BigInt("1337")
		const uintY3zGho2 = BigInt("1148")
		const addressvBfuiFn = accounts[3]
		const uintM49bNSN = BigInt("999")
		const addressV3MeYPq = accounts[1]
		const addresskxcIrzS = accounts[3]
		const boolGObo9Qh = await LUPbDJTFRD.lock.call(addressvBfuiFn, uintY3zGho2, uintAFid8iI, {from: accounts[5]});
		const uint8bgLlMw = await LUPbDJTFRD.decimals.call({from: accounts[2]});
		const boolGeCk6Z9 = await LUPbDJTFRD.transfer.call(addressV3MeYPq, uintM49bNSN, {from: accounts[4]});
		const uint256saMn62G = await LUPbDJTFRD.balanceOf.call(addresskxcIrzS, {from: accounts[4]});

		await expect(LUPbDJTFRD.lock.call(addressvBfuiFn, uintY3zGho2, uintAFid8iI, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPbDJTFRD = await LUP.new({from: accounts[5]});
		const uintD96fImd = BigInt("1127")
		const addressJb3cYyj = accounts[5]
		const addressE4y490 = accounts[3]
		const uintZLsxug = BigInt("591")
		const uintgAMKahW = BigInt("175")
		const addressFaHkQn = accounts[0]
		const boolQkpGzml = await LUPbDJTFRD.unlock.call(addressJb3cYyj, uintD96fImd, {from: accounts[5]});
		const uint256saMn62G = await LUPbDJTFRD.balanceOf.call(addressE4y490, {from: accounts[4]});
		const boolDF6N7x8 = await LUPbDJTFRD.lock.call(addressFaHkQn, uintgAMKahW, uintZLsxug, {from: accounts[3]});

		await expect(LUPbDJTFRD.unlock.call(addressJb3cYyj, uintD96fImd, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPbDJTFRD = await LUP.new({from: accounts[5]});
		const addressFMyK2ML = accounts[3]
		const addressZLPNAbk = accounts[2]
		const addressjTRNzwM = accounts[4]
		const uint256saMn62G = await LUPbDJTFRD.balanceOf.call(addressFMyK2ML, {from: accounts[4]});
		const uint8sxz6P30 = await LUPbDJTFRD.decimals.call({from: accounts[3]});
		const addressH0X0ir4 = await LUPbDJTFRD.upgradeTo.call(addressZLPNAbk, {from: accounts[5]});
		const addressXxWPcJq = await LUPbDJTFRD.notFrozen.call(addressjTRNzwM, {from: accounts[1]});

		assert.equal(uint256saMn62G, BigInt("0"))
		assert.equal(uint8sxz6P30, BigInt("18"))
		await expect(LUPbDJTFRD.notFrozen.call(addressjTRNzwM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})