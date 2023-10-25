const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractGC80DAp = await ERC20.new({from: accounts[2]});
		const valueIEsHR29 = BigInt("291")
		const toycHsQEx = accounts[5]
		const fromdcG9a6 = accounts[5]
		const valuen919cvJ = BigInt("271")
		const spenderVzYCiHg = accounts[1]
		const valueZRvhmEy = BigInt("1553")
		const toWiCqSOP = accounts[0]
		const ownercOq2eFa = accounts[2]
		const valuesgtmDpq = BigInt("1489")
		const tod16M4Id = accounts[3]
		const fromG5d5DDH = accounts[4]
		const ownerp3YyXly = accounts[2]
		const nullS22UNLa = await contractGC80DAp.transferFrom.call(fromdcG9a6, toycHsQEx, valueIEsHR29, {from: accounts[2]});
		const nullRdeN27z = await contractGC80DAp.approve.call(spenderVzYCiHg, valuen919cvJ, {from: accounts[2]});
		const nullAbwThaO = await contractGC80DAp.transfer.call(toWiCqSOP, valueZRvhmEy, {from: accounts[5]});
		const nulleGd7aX9 = await contractGC80DAp.balanceOf.call(ownercOq2eFa, {from: accounts[1]});
		const nullibtmlKo = await contractGC80DAp.transferFrom.call(fromG5d5DDH, tod16M4Id, valuesgtmDpq, {from: accounts[1]});
		const nullqNqIYVd = await contractGC80DAp.balanceOf.call(ownerp3YyXly, {from: accounts[2]});

		await expect(contractGC80DAp.transferFrom.call(fromdcG9a6, toycHsQEx, valueIEsHR29, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractDrj5kqF = await ERC20.new({from: accounts[3]});
		const spenderANPqzKp = "0x0000000000000000000000000000000000000001"
		const ownerVQcNcD = accounts[2]
		const value9Sg24w = BigInt("814")
		const spenderCc1xZzI = accounts[0]
		const spendernioYyR2 = accounts[3]
		const ownerKJpCsuk = accounts[4]
		const nullVkZxGMx = await contractDrj5kqF.allowance.call(ownerVQcNcD, spenderANPqzKp, {from: accounts[1]});
		const nullMc4dKb = await contractDrj5kqF.approve.call(spenderCc1xZzI, value9Sg24w, {from: accounts[1]});
		const nullBzG6Wnp = await contractDrj5kqF.allowance.call(ownerKJpCsuk, spendernioYyR2, {from: accounts[1]});

		assert.equal(nullBzG6Wnp, 0)
		assert.equal(nullMc4dKb, true)
		assert.equal(nullVkZxGMx, 0)
	});

	it('test for ERC20', async () => {
		const contractmGcNa5N = await ERC20.new({from: accounts[5]});
		const spenderQNlA7G = "0x0000000000000000000000000000000000000001"
		const ownerRhi9PVA = accounts[1]
		const spenderbgoNLG0 = accounts[2]
		const ownerGMBrsIW = accounts[3]
		const valueHIuieKA = BigInt("1859")
		const spenderS3f3S0Y = accounts[2]
		const nullZmPAdaJ = await contractmGcNa5N.allowance.call(ownerRhi9PVA, spenderQNlA7G, {from: accounts[0]});
		const nullCDO5tEW = await contractmGcNa5N.allowance.call(ownerGMBrsIW, spenderbgoNLG0, {from: accounts[5]});
		const nulldHKHtiD = await contractmGcNa5N.totalSupply.call({from: accounts[2]});
		const nullD5AAqiu = await contractmGcNa5N.totalSupply.call({from: accounts[0]});
		const nullpbaQgBT = await contractmGcNa5N.approve.call(spenderS3f3S0Y, valueHIuieKA, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullCDO5tEW, 0)
		assert.equal(nullD5AAqiu, 0)
		assert.equal(nullZmPAdaJ, 0)
		assert.equal(nulldHKHtiD, 0)
		assert.equal(nullpbaQgBT, true)
	});

	it('test for ERC20', async () => {
		const contractcpBOIGR = await ERC20.new({from: accounts[0]});
		const ownerl8y6MAG = accounts[3]
		const spenderlbo1ubT = accounts[4]
		const ownergp2vLQ6 = accounts[1]
		const subtractedValuegRo4XmB = BigInt("1797")
		const spenderayHBLyL = accounts[3]
		const addedValueDuRndey = BigInt("956")
		const spender3v9nPB = accounts[1]
		const nullozSBJcb = await contractcpBOIGR.balanceOf.call(ownerl8y6MAG, {from: accounts[0]});
		const nullfPJGY9X = await contractcpBOIGR.allowance.call(ownergp2vLQ6, spenderlbo1ubT, {from: accounts[2]});
		const nullbwXYPP6 = await contractcpBOIGR.decreaseAllowance.call(spenderayHBLyL, subtractedValuegRo4XmB, {from: accounts[0]});
		const nullevnhOGV = await contractcpBOIGR.increaseAllowance.call(spender3v9nPB, addedValueDuRndey, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullfPJGY9X, 0)
		assert.equal(nullozSBJcb, 0)
		await expect(contractcpBOIGR.decreaseAllowance.call(spenderayHBLyL, subtractedValuegRo4XmB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractqob6Jh3 = await ERC20.new({from: accounts[0]});
		const ownerjvoM7cX = accounts[4]
		const spenderszjVSs = accounts[4]
		const ownerVUaMY7D = accounts[1]
		const valueFP7qOn5 = BigInt("1159")
		const tomXgLmwd = accounts[4]
		const ownerXOEofN5 = accounts[1]
		const subtractedValueUZ315D2 = BigInt("1741")
		const spenderhIQan9 = accounts[3]
		const nulltvQq4sv = await contractqob6Jh3.balanceOf.call(ownerjvoM7cX, {from: accounts[2]});
		const nullB3AR9g8 = await contractqob6Jh3.allowance.call(ownerVUaMY7D, spenderszjVSs, {from: accounts[3]});
		const nullDs7chb = await contractqob6Jh3.transfer.call(tomXgLmwd, valueFP7qOn5, {from: accounts[4]});
		const nullGmhFbo7 = await contractqob6Jh3.balanceOf.call(ownerXOEofN5, {from: accounts[5]});
		const nullb0TeIPR = await contractqob6Jh3.decreaseAllowance.call(spenderhIQan9, subtractedValueUZ315D2, {from: accounts[1]});

		assert.equal(nullB3AR9g8, 0)
		assert.equal(nulltvQq4sv, 0)
		await expect(contractqob6Jh3.transfer.call(tomXgLmwd, valueFP7qOn5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractI9uC5PO = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const valuehbr3NZ = BigInt("610")
		const toonljuXe = accounts[4]
		const subtractedValueashGcHG = BigInt("284")
		const spenderWSxoT8Q = accounts[1]
		const ownerHOQUbmO = accounts[5]
		const valuej693Y1 = BigInt("1705")
		const toctnb4Sj = accounts[4]
		const nullltLYICf = await contractI9uC5PO.transfer.call(toonljuXe, valuehbr3NZ, {from: accounts[5]});
		const nullQGVvTeO = await contractI9uC5PO.decreaseAllowance.call(spenderWSxoT8Q, subtractedValueashGcHG, {from: accounts[0]});
		const nullLmvS7rE = await contractI9uC5PO.totalSupply.call({from: accounts[3]});
		const nulla885ppv = await contractI9uC5PO.balanceOf.call(ownerHOQUbmO, {from: "0x0000000000000000000000000000000000000001"});
		const nullLlkA3K = await contractI9uC5PO.transfer.call(toctnb4Sj, valuej693Y1, {from: accounts[0]});
	});

	it('test for ERC20', async () => {
		const contractTWImNmw = await ERC20.new({from: accounts[3]});
		const addedValue2puTEO = BigInt("1211")
		const spenderyyEmIl5 = accounts[2]
		const valuetZgxkIz = BigInt("155")
		const toVt1y2Aw = accounts[3]
		const subtractedValueevdIbv7 = BigInt("31")
		const spenderzgi3GBJ = accounts[1]
		const nullX8bb7T = await contractTWImNmw.increaseAllowance.call(spenderyyEmIl5, addedValue2puTEO, {from: accounts[4]});
		const nullsxJIPXU = await contractTWImNmw.transfer.call(toVt1y2Aw, valuetZgxkIz, {from: "0x0000000000000000000000000000000000000001"});
		const nullxa9wDoL = await contractTWImNmw.decreaseAllowance.call(spenderzgi3GBJ, subtractedValueevdIbv7, {from: accounts[0]});

		assert.equal(nullX8bb7T, true)
		await expect(contractTWImNmw.transfer.call(toVt1y2Aw, valuetZgxkIz, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})