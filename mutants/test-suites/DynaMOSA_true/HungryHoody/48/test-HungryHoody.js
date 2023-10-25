const HungryHoody = artifacts.require("HungryHoody");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HungryHoody', (accounts) => {
	it('test for HungryHoody', async () => {
		const HungryHoodywiIoqF0 = await HungryHoody.new({from: "0x0000000000000000000000000000000000000001"});
		const uintcEDqqXx = BigInt("5")
		const uintClyIdwB = BigInt("983")
		const addressCSlEIcS = accounts[0]
		const uints8qimxW = BigInt("1318")
		const uintdo2SQxo = BigInt("1797")
		const uintdYklIGA = await HungryHoodywiIoqF0.safeDiv.call(uintClyIdwB, uintcEDqqXx, {from: accounts[3]});
		const uintut7cCZ7 = await HungryHoodywiIoqF0.balanceOf.call(addressCSlEIcS, {from: accounts[3]});
		const uintCm6W5IO = await HungryHoodywiIoqF0.safeMul.call(uintdo2SQxo, uints8qimxW, {from: accounts[1]});
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyVUPYcV = await HungryHoody.new({from: accounts[2]});
		const uintEsHciHS = BigInt("748")
		const uintVUHD6Mx = BigInt("187")
		const uintmqslTy9 = BigInt("1864")
		const addressD69IIlL = "0x0000000000000000000000000000000000000001"
		const uintrrdyHx = BigInt("1732")
		const uintF5ISHH8 = BigInt("251")
		const uintNAyeWSY = BigInt("227")
		const uintNDimRM = BigInt("350")
		const uintVEW19mH = await HungryHoodyVUPYcV.safeMul.call(uintVUHD6Mx, uintEsHciHS, {from: accounts[0]});
		const booliV9ZKNg = await HungryHoodyVUPYcV.approve.call(addressD69IIlL, uintmqslTy9, {from: accounts[3]});
//		const uintXUxHgOR = await HungryHoodyVUPYcV.safeSub.call(uintF5ISHH8, uintrrdyHx, {from: accounts[2]});
//		const uintsJCBzWh = await HungryHoodyVUPYcV.safeDiv.call(uintNDimRM, uintNAyeWSY, {from: accounts[4]});

		assert.equal(booliV9ZKNg, true)
		assert.equal(uintVEW19mH, BigInt("139876"))
		await expect(HungryHoodyVUPYcV.safeSub.call(uintF5ISHH8, uintrrdyHx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyDMn5emY = await HungryHoody.new({from: accounts[4]});
		const addressmsE1TC8 = accounts[0]
		const uintE7SGWbm = BigInt("11")
		const addressijQYzB2 = accounts[0]
		const uintclqLdI8 = BigInt("1964")
		const uinthvag0Mq = BigInt("103")
		const uintTT0ZLef = BigInt("1098")
		const addressNqminaT = accounts[1]
		const address9JAYRm = accounts[1]
		const addressDFcnETy = accounts[0]
		const addressWPWpJJp = accounts[1]
		const addressdiNH8WQ = accounts[0]
		const uintiC71gF = await HungryHoodyDMn5emY.balanceOf.call(addressmsE1TC8, {from: accounts[4]});
		const boolt11YY5 = await HungryHoodyDMn5emY.transfer.call(addressijQYzB2, uintE7SGWbm, {from: accounts[4]});
		const uintGAJZKUb = await HungryHoodyDMn5emY.safeDiv.call(uinthvag0Mq, uintclqLdI8, {from: accounts[2]});
//		const boolvbzhHOL = await HungryHoodyDMn5emY.transfer.call(addressNqminaT, uintTT0ZLef, {from: accounts[2]});
//		const uinte0Z643m = await HungryHoodyDMn5emY.allowance.call(addressDFcnETy, address9JAYRm, {from: accounts[2]});
//		const uintoTLW4V0 = await HungryHoodyDMn5emY.allowance.call(addressdiNH8WQ, addressWPWpJJp, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolt11YY5, true)
		assert.equal(uintGAJZKUb, BigInt("0"))
		assert.equal(uintiC71gF, BigInt("0"))
		await expect(HungryHoodyDMn5emY.transfer.call(addressNqminaT, uintTT0ZLef, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyRuMw2ET = await HungryHoody.new({from: accounts[1]});
		const uintBi4Jh1h = BigInt("1508")
		const addressihUj7g = accounts[0]
		const uintT57beHB = await HungryHoodyRuMw2ET.totalSupply.call({from: accounts[3]});
		const boolN2tYkK3 = await HungryHoodyRuMw2ET.transfer.call(addressihUj7g, uintBi4Jh1h, {from: accounts[1]});

		assert.equal(boolN2tYkK3, true)
		assert.equal(uintT57beHB, BigInt("25000000000000000000"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyjzWJ9O = await HungryHoody.new({from: accounts[0]});
		const uinthipTQza = BigInt("586")
		const addressdsMNTEZ = accounts[3]
		const addressn4VDel3 = accounts[2]
		const addressSfVKosI = accounts[4]
		const uintgUHCdzU = BigInt("604")
		const uintAnlMH58 = BigInt("632")
		const boolIeXUdGx = await HungryHoodyjzWJ9O.approve.call(addressdsMNTEZ, uinthipTQza, {from: "0x0000000000000000000000000000000000000001"});
		const uintuoIA5l = await HungryHoodyjzWJ9O.allowance.call(addressSfVKosI, addressn4VDel3, {from: accounts[1]});
		const uintuLlDaEF = await HungryHoodyjzWJ9O.safeMul.call(uintAnlMH58, uintgUHCdzU, {from: accounts[4]});

		assert.equal(boolIeXUdGx, true)
		assert.equal(uintuLlDaEF, BigInt("381728"))
		assert.equal(uintuoIA5l, BigInt("0"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyB6LaY7Z = await HungryHoody.new({from: accounts[5]});
		const uintdcI5lxJ = BigInt("648")
		const uintBRVoiRC = BigInt("1759")
		const addressFhhvLv = "0x0000000000000000000000000000000000000001"
		const uintpUWhChk = BigInt("1199")
		const addressfLaCK71 = "0x0000000000000000000000000000000000000001"
		const addressc213qB = accounts[5]
		const uintCRh7pLj = await HungryHoodyB6LaY7Z.safeDiv.call(uintBRVoiRC, uintdcI5lxJ, {from: accounts[2]});
		const uintjYKwLS7 = await HungryHoodyB6LaY7Z.balanceOf.call(addressFhhvLv, {from: accounts[4]});
		const uintaLpu3tX = await HungryHoodyB6LaY7Z.totalSupply.call({from: accounts[4]});
//		const boolGEblLKE = await HungryHoodyB6LaY7Z.transferFrom.call(addressc213qB, addressfLaCK71, uintpUWhChk, {from: accounts[4]});

		assert.equal(uintCRh7pLj, BigInt("2"))
		assert.equal(uintaLpu3tX, BigInt("25000000000000000000"))
		assert.equal(uintjYKwLS7, BigInt("0"))
		await expect(HungryHoodyB6LaY7Z.transferFrom.call(addressc213qB, addressfLaCK71, uintpUWhChk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})