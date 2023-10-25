const ZAD = artifacts.require("ZAD");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ZAD', (accounts) => {
	it('test for ZAD', async () => {
		const ZADpVGTRf = await ZAD.new({from: accounts[0]});
		const uintj4hp5bk = BigInt("574")
		const addressXGMtmYm = accounts[4]
		const addressRP4qYFx = accounts[5]
		const addressNdBBIgt = accounts[0]
		const uintPQBHy9J = BigInt("631")
		const addressOZCXl3C = accounts[0]
		const uintAgD64o8 = BigInt("844")
		const addresspAwL3M = accounts[3]
		const addressgD9pAS = accounts[0]
		const booloOlsbw7 = await ZADpVGTRf.increaseAllowance.call(addressXGMtmYm, uintj4hp5bk, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ne3om3 = await ZADpVGTRf.allowance.call(addressNdBBIgt, addressRP4qYFx, {from: accounts[3]});
//		const boolR546nNl = await ZADpVGTRf.transfer.call(addressOZCXl3C, uintPQBHy9J, {from: accounts[3]});
//		const boolNyv4MBe = await ZADpVGTRf.transferFrom.call(addressgD9pAS, addresspAwL3M, uintAgD64o8, {from: accounts[2]});

		assert.equal(booloOlsbw7, true)
		assert.equal(uint256ne3om3, BigInt("0"))
		await expect(ZADpVGTRf.transfer.call(addressOZCXl3C, uintPQBHy9J, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADnaEObNP = await ZAD.new({from: accounts[0]});
		const uintJPXagX0 = BigInt("36")
		const addressrVeZrtj = accounts[1]
		const addressz6LNHx = "0x0000000000000000000000000000000000000001"
		const addressOymCZ1A = accounts[3]
		const uintBiTKerU = BigInt("179")
		const boolJca2oai = await ZADnaEObNP.increaseAllowance.call(addressrVeZrtj, uintJPXagX0, {from: accounts[2]});
		const uint8ljwVliy = await ZADnaEObNP.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256KSTgs2G = await ZADnaEObNP.allowance.call(addressOymCZ1A, addressz6LNHx, {from: accounts[5]});
		const stringrpcQJDs = await ZADnaEObNP.symbol.call({from: accounts[5]});
//		const uint256kFwMBmQ = await ZADnaEObNP._burn.call(uintBiTKerU, {from: accounts[2]});

		assert.equal(boolJca2oai, true)
		assert.equal(stringrpcQJDs, "ZAD")
		assert.equal(uint256KSTgs2G, BigInt("0"))
		assert.equal(uint8ljwVliy, BigInt("18"))
		await expect(ZADnaEObNP._burn.call(uintBiTKerU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADrDf7foc = await ZAD.new({from: accounts[2]});
		const uintcsClOLV = BigInt("1940")
		const addresse4QsYB = accounts[5]
		const uinthc558ME = BigInt("1957")
		const addressmkHkUsf = accounts[3]
		const uintDUasQYF = BigInt("380")
		const addresslCmeBoF = accounts[5]
		const uintV0BKq9 = BigInt("672")
		const addresseNSZ8TL = accounts[5]
		const addressrRksYfW = accounts[0]
		const boolRGIga3t = await ZADrDf7foc.increaseAllowance.call(addresse4QsYB, uintcsClOLV, {from: accounts[4]});
//		const boolwq6tcJ8 = await ZADrDf7foc.decreaseAllowance.call(addressmkHkUsf, uinthc558ME, {from: accounts[1]});
//		const boolC1jmSFn = await ZADrDf7foc.increaseAllowance.call(addresslCmeBoF, uintDUasQYF, {from: accounts[1]});
//		const boolBXbiuaq = await ZADrDf7foc.transferFrom.call(addressrRksYfW, addresseNSZ8TL, uintV0BKq9, {from: accounts[0]});

		assert.equal(boolRGIga3t, true)
		await expect(ZADrDf7foc.decreaseAllowance.call(addressmkHkUsf, uinthc558ME, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADUZUtFdy = await ZAD.new({from: accounts[2]});
		const addressqRloxeH = accounts[0]
		const addressOUranEa = accounts[2]
		const uintcfg0tMF = BigInt("123")
		const addressmQZLzc = accounts[2]
		const uint256XMepM42 = await ZADUZUtFdy.balanceOf.call(addressqRloxeH, {from: accounts[3]});
		const uint8VMK6bZH = await ZADUZUtFdy.decimals.call({from: accounts[4]});
		const uint256LhY4Ewr = await ZADUZUtFdy.balanceOf.call(addressOUranEa, {from: accounts[4]});
		const boolx0bftF0 = await ZADUZUtFdy.increaseAllowance.call(addressmQZLzc, uintcfg0tMF, {from: accounts[3]});
		const stringrJbLIAH = await ZADUZUtFdy.symbol.call({from: accounts[2]});

		assert.equal(boolx0bftF0, true)
		assert.equal(stringrJbLIAH, "ZAD")
		assert.equal(uint256LhY4Ewr, BigInt("0"))
		assert.equal(uint256XMepM42, BigInt("0"))
		assert.equal(uint8VMK6bZH, BigInt("18"))
	});

	it('test for ZAD', async () => {
		const ZADLAep0IR = await ZAD.new({from: accounts[4]});
		const addressjfGBljc = accounts[2]
		const uintvpAvtBQ = BigInt("56")
		const addressZ3VDDRI = accounts[4]
		const addressWNiSKAI = accounts[2]
		const addresssoKM7xY = accounts[4]
		const uintiJ0IY7H = BigInt("1312")
		const addressZV63Lj = accounts[5]
		const uint8XzzXUE2 = await ZADLAep0IR.decimals.call({from: accounts[1]});
		const uint256TYF2fCy = await ZADLAep0IR.totalSupply.call({from: accounts[3]});
		const uint256OSzIJ7 = await ZADLAep0IR.balanceOf.call(addressjfGBljc, {from: accounts[2]});
		const boolRI85qe8 = await ZADLAep0IR.increaseAllowance.call(addressZ3VDDRI, uintvpAvtBQ, {from: accounts[3]});
		const uint256iy0luG = await ZADLAep0IR.allowance.call(addresssoKM7xY, addressWNiSKAI, {from: accounts[5]});
		const boolLcYYgIO = await ZADLAep0IR.approve.call(addressZV63Lj, uintiJ0IY7H, {from: accounts[1]});

		assert.equal(boolLcYYgIO, true)
		assert.equal(boolRI85qe8, true)
		assert.equal(uint256OSzIJ7, BigInt("0"))
		assert.equal(uint256TYF2fCy, BigInt("100000000000000000000000000"))
		assert.equal(uint256iy0luG, BigInt("0"))
		assert.equal(uint8XzzXUE2, BigInt("18"))
	});

	it('test for ZAD', async () => {
		const ZADQqeiLUY = await ZAD.new({from: accounts[0]});
		const addressArHpar = accounts[3]
		const uintOj0HaDQ = BigInt("1660")
		const addressYaWSSfE = accounts[3]
		const uint256gNIFOBs = await ZADQqeiLUY.balanceOf.call(addressArHpar, {from: accounts[1]});
		const boolnI2Mkg0 = await ZADQqeiLUY.increaseAllowance.call(addressYaWSSfE, uintOj0HaDQ, {from: accounts[5]});
		const stringgeHo2bt = await ZADQqeiLUY.symbol.call({from: accounts[1]});
		const stringaD4Si2W = await ZADQqeiLUY.name.call({from: accounts[1]});

		assert.equal(boolnI2Mkg0, true)
		assert.equal(stringaD4Si2W, "Zadkiel")
		assert.equal(stringgeHo2bt, "ZAD")
		assert.equal(uint256gNIFOBs, BigInt("0"))
	});

	it('test for ZAD', async () => {
		const ZADjFyIisq = await ZAD.new({from: accounts[3]});
		const uintOQPhYh = BigInt("1280")
		const addresso3o6xAI = accounts[4]
		const uintC7uL59G = BigInt("1749")
		const addressEfsuT4l = accounts[2]
		const addressZUSAqDs = accounts[5]
		const uintZEa8S9V = BigInt("266")
		const addressEPK5x3y = accounts[1]
		const uintim8nqN2 = BigInt("1390")
		const addressL6TpwvJ = accounts[2]
		const addressxOBYl4X = accounts[4]
		const uint256uHNStB = await ZADjFyIisq.totalSupply.call({from: accounts[2]});
		const boolVd77EHe = await ZADjFyIisq.increaseAllowance.call(addresso3o6xAI, uintOQPhYh, {from: accounts[1]});
//		const booldwag3fR = await ZADjFyIisq.transferFrom.call(addressZUSAqDs, addressEfsuT4l, uintC7uL59G, {from: accounts[2]});
//		const boolZxxpisd = await ZADjFyIisq.decreaseAllowance.call(addressEPK5x3y, uintZEa8S9V, {from: accounts[4]});
//		const boolbXtCPe3 = await ZADjFyIisq.transferFrom.call(addressxOBYl4X, addressL6TpwvJ, uintim8nqN2, {from: accounts[1]});

		assert.equal(boolVd77EHe, true)
		assert.equal(uint256uHNStB, BigInt("100000000000000000000000000"))
		await expect(ZADjFyIisq.transferFrom.call(addressZUSAqDs, addressEfsuT4l, uintC7uL59G, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADnqM7wqe = await ZAD.new({from: "0x0000000000000000000000000000000000000001"});
		const uintZxnSr4 = BigInt("558")
		const addressoHLhMV1 = accounts[1]
		const uint8YSZeSsk = await ZADnqM7wqe.decimals.call({from: accounts[0]});
		const stringnlJt8S8 = await ZADnqM7wqe.name.call({from: accounts[0]});
		const boole51RjBS = await ZADnqM7wqe.increaseAllowance.call(addressoHLhMV1, uintZxnSr4, {from: accounts[2]});
	});
})