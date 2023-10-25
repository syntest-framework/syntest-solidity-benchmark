const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractoajwIc3 = await ERC20.new({from: accounts[3]});
		const valueSDwi9NP = BigInt("81")
		const toxAD1oNI = accounts[1]
		const fromMwolGiW = accounts[0]
		const spenderR13p8H = accounts[4]
		const ownerosUUR9e = accounts[5]
		const spenderAXcSuyc = accounts[5]
		const ownerssO3VMC = accounts[3]
		const ownerlalQmvs = accounts[2]
		const nullDY0WZRb = await contractoajwIc3.transferFrom.call(fromMwolGiW, toxAD1oNI, valueSDwi9NP, {from: accounts[4]});
		const nullyNqjV3Q = await contractoajwIc3.allowance.call(ownerosUUR9e, spenderR13p8H, {from: accounts[1]});
		const nullE7CBVFH = await contractoajwIc3.allowance.call(ownerssO3VMC, spenderAXcSuyc, {from: accounts[4]});
		const nullySWN6VU = await contractoajwIc3.balanceOf.call(ownerlalQmvs, {from: accounts[2]});

		await expect(contractoajwIc3.transferFrom.call(fromMwolGiW, toxAD1oNI, valueSDwi9NP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractHdCsk00 = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const valueAg6p2Aw = BigInt("1592")
		const spendergg3pJbH = "0x0000000000000000000000000000000000000001"
		const spenderM4S37oa = "0x0000000000000000000000000000000000000001"
		const ownertR4I47T = accounts[5]
		const spenderjGSkTPz = accounts[3]
		const ownerAQhQ9u6 = accounts[5]
		const spenderCurONdd = "0x0000000000000000000000000000000000000001"
		const ownerNLlOGz5 = accounts[1]
		const nulleMr67mA = await contractHdCsk00.approve.call(spendergg3pJbH, valueAg6p2Aw, {from: accounts[5]});
		const nullGjK3lGO = await contractHdCsk00.totalSupply.call({from: accounts[4]});
		const nullMAxYiL = await contractHdCsk00.allowance.call(ownertR4I47T, spenderM4S37oa, {from: accounts[0]});
		const nullOycLPU0 = await contractHdCsk00.allowance.call(ownerAQhQ9u6, spenderjGSkTPz, {from: accounts[0]});
		const nullyasJENP = await contractHdCsk00.allowance.call(ownerNLlOGz5, spenderCurONdd, {from: accounts[3]});
	});

	it('test for ERC20', async () => {
		const contractd175SR9 = await ERC20.new({from: accounts[0]});
		const valueL7w3Tdt = BigInt("959")
		const toucYroHd = accounts[3]
		const valuecDEzAaY = BigInt("1160")
		const torh1Mvno = accounts[2]
		const nullbktktwE = await contractd175SR9.transfer.call(toucYroHd, valueL7w3Tdt, {from: accounts[0]});
		const nullu2nRON = await contractd175SR9.transfer.call(torh1Mvno, valuecDEzAaY, {from: accounts[0]});

		await expect(contractd175SR9.transfer.call(toucYroHd, valueL7w3Tdt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractV20BkKC = await ERC20.new({from: accounts[2]});
		const valueyzfsogF = BigInt("1453")
		const toXWexJtv = accounts[0]
		const fromC1i70Qj = accounts[4]
		const valueCVbyGN9 = BigInt("754")
		const toQ9x5VxV = accounts[4]
		const fromLchIG9g = accounts[0]
		const ownerU8EprwR = accounts[5]
		const valuecIEdGiQ = BigInt("83")
		const spenderVnXF6lu = accounts[2]
		const nullUkV0VAm = await contractV20BkKC.totalSupply.call({from: accounts[1]});
		const nullD7EdcmZ = await contractV20BkKC.transferFrom.call(fromC1i70Qj, toXWexJtv, valueyzfsogF, {from: accounts[0]});
		const nullFXSBmU6 = await contractV20BkKC.transferFrom.call(fromLchIG9g, toQ9x5VxV, valueCVbyGN9, {from: accounts[3]});
		const nullzVGCc4Y = await contractV20BkKC.balanceOf.call(ownerU8EprwR, {from: accounts[3]});
		const nullmrbtKeA = await contractV20BkKC.approve.call(spenderVnXF6lu, valuecIEdGiQ, {from: accounts[4]});

		assert.equal(nullUkV0VAm, 0)
		await expect(contractV20BkKC.transferFrom.call(fromC1i70Qj, toXWexJtv, valueyzfsogF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractbDf3iAM = await ERC20.new({from: accounts[4]});
		const spenderEoUYUc = accounts[2]
		const ownerjfZori = accounts[0]
		const spender650mDw = accounts[4]
		const ownery65u2UM = accounts[4]
		const valuefgARDOI = BigInt("1124")
		const spenderTHYOfL = accounts[4]
		const addedValueOTnRnE = BigInt("474")
		const spenderv0i4dKW = accounts[2]
		const nullcXQlRw4 = await contractbDf3iAM.allowance.call(ownerjfZori, spenderEoUYUc, {from: accounts[2]});
		const nullPn0VCoJ = await contractbDf3iAM.allowance.call(ownery65u2UM, spender650mDw, {from: "0x0000000000000000000000000000000000000001"});
		const nullzk7VDQW = await contractbDf3iAM.approve.call(spenderTHYOfL, valuefgARDOI, {from: accounts[2]});
		const nullKjGWiHg = await contractbDf3iAM.increaseAllowance.call(spenderv0i4dKW, addedValueOTnRnE, {from: accounts[4]});
		const nullJuN5bY7 = await contractbDf3iAM.totalSupply.call({from: accounts[3]});

		assert.equal(nullJuN5bY7, 0)
		assert.equal(nullKjGWiHg, true)
		assert.equal(nullPn0VCoJ, 0)
		assert.equal(nullcXQlRw4, 0)
		assert.equal(nullzk7VDQW, true)
	});

	it('test for ERC20', async () => {
		const contractoUlZ8XE = await ERC20.new({from: accounts[5]});
		const ownerQEzAsJ5 = accounts[4]
		const valuedvsQkJ7 = BigInt("892")
		const tokPqXLH7 = accounts[4]
		const nullkdOIZJh = await contractoUlZ8XE.balanceOf.call(ownerQEzAsJ5, {from: accounts[2]});
		const nullZFvqrWB = await contractoUlZ8XE.transfer.call(tokPqXLH7, valuedvsQkJ7, {from: accounts[2]});

		assert.equal(nullkdOIZJh, 0)
		await expect(contractoUlZ8XE.transfer.call(tokPqXLH7, valuedvsQkJ7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractFnEf8gb = await ERC20.new({from: accounts[0]});
		const subtractedValuewtyTUhg = BigInt("204")
		const spenderizZa34Z = "0x0000000000000000000000000000000000000001"
		const value2nw8dk = BigInt("959")
		const tomQY6VD1 = accounts[3]
		const valueZNH3AKj = BigInt("1160")
		const too7efrUk = accounts[3]
		const nullBdLyYdT = await contractFnEf8gb.decreaseAllowance.call(spenderizZa34Z, subtractedValuewtyTUhg, {from: accounts[1]});
		const nullft46GPT = await contractFnEf8gb.transfer.call(tomQY6VD1, value2nw8dk, {from: accounts[0]});
		const nullQM6FGx6 = await contractFnEf8gb.transfer.call(too7efrUk, valueZNH3AKj, {from: accounts[0]});

		await expect(contractFnEf8gb.decreaseAllowance.call(spenderizZa34Z, subtractedValuewtyTUhg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})