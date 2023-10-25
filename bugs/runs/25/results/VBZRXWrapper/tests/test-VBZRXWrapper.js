const VBZRXWrapper = artifacts.require("VBZRXWrapper");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper', (accounts) => {
	it('test for VBZRXWrapper', async () => {
		const contractDa3RM8 = await VBZRXWrapper.new({from: accounts[1]});
		const valuewTfX5u9 = BigInt("812")
		const valuec52xPc6 = BigInt("1488")
		const nulli903U7 = await contractDa3RM8.claim.call({from: accounts[0]});
		await contractDa3RM8.deposit.call(valuewTfX5u9, {from: accounts[1]});
		await contractDa3RM8.deposit.call(valuec52xPc6, {from: accounts[4]});

		assert.equal(nulli903U7, 0)
		await expect(contractDa3RM8.deposit.call(valuewTfX5u9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractKBcK9fK = await VBZRXWrapper.new({from: accounts[2]});
		const valueXoxM9q = BigInt("248")
		const dstq1q0GT0 = accounts[0]
		const valuefFG1uUp = BigInt("738")
		const dstOCeaz8r = accounts[0]
		const srcKGvcWeV = accounts[4]
		const valuejPM3lq0 = BigInt("16")
		const spendermlHeekL = accounts[4]
		const nullmpina0e = await contractKBcK9fK.claim.call({from: accounts[3]});
		const nullXJm3neY = await contractKBcK9fK.transfer.call(dstq1q0GT0, valueXoxM9q, {from: accounts[3]});
		const null9knhku = await contractKBcK9fK.transferFrom.call(srcKGvcWeV, dstOCeaz8r, valuefFG1uUp, {from: accounts[5]});
		const nullGiYPbbe = await contractKBcK9fK.approve.call(spendermlHeekL, valuejPM3lq0, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullmpina0e, 0)
		await expect(contractKBcK9fK.transfer.call(dstq1q0GT0, valueXoxM9q, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractdJUvUPU = await VBZRXWrapper.new({from: accounts[4]});
		const valueQs3QL9O = BigInt("459")
		await contractdJUvUPU.exit.call({from: accounts[2]});
		await contractdJUvUPU.deposit.call(valueQs3QL9O, {from: accounts[3]});

		await expect(contractdJUvUPU.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractwvPx2sD = await VBZRXWrapper.new({from: accounts[3]});
		const valueQPr36mv = BigInt("166")
		const spenderk8ghkhR = accounts[2]
		const valueZlNXLwx = BigInt("1117")
		const spenderrOVsmrv = accounts[0]
		const nullfnQBri0 = await contractwvPx2sD.approve.call(spenderk8ghkhR, valueQPr36mv, {from: "0x0000000000000000000000000000000000000001"});
		await contractwvPx2sD.exit.call({from: accounts[0]});
		await contractwvPx2sD.exit.call({from: accounts[2]});
		const nullvHGB0EK = await contractwvPx2sD.approve.call(spenderrOVsmrv, valueZlNXLwx, {from: accounts[2]});

		assert.equal(nullfnQBri0, true)
		await expect(contractwvPx2sD.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractC9azlFV = await VBZRXWrapper.new({from: accounts[3]});
		const valueo7dzsfy = BigInt("772")
		const spenderGhINuxW = accounts[0]
		const accountcrEJfa7 = accounts[4]
		const valuesxEejfp = BigInt("1709")
		const accounti8qJ3mK = accounts[3]
		const nullHighTBe = await contractC9azlFV.approve.call(spenderGhINuxW, valueo7dzsfy, {from: "0x0000000000000000000000000000000000000001"});
		const nullK3z4U6Q = await contractC9azlFV.claimable.call(accountcrEJfa7, {from: accounts[1]});
		await contractC9azlFV.withdraw.call(valuesxEejfp, {from: accounts[0]});
		const nullycQ1Gh3 = await contractC9azlFV.claimable.call(accounti8qJ3mK, {from: accounts[0]});
		await contractC9azlFV.exit.call({from: accounts[2]});

		assert.equal(nullHighTBe, true)
		await expect(contractC9azlFV.claimable.call(accountcrEJfa7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractxwKOnun = await VBZRXWrapper.new({from: "0x0000000000000000000000000000000000000001"});
		const valueaSGzo0O = BigInt("1371")
		const dstAlCh5ZN = "0x0000000000000000000000000000000000000001"
		const srcFf4HqoV = accounts[0]
		const nullD0HRYPF = await contractxwKOnun.claim.call({from: accounts[5]});
		const nullpPsMzTQ = await contractxwKOnun.transferFrom.call(srcFf4HqoV, dstAlCh5ZN, valueaSGzo0O, {from: accounts[1]});
	});
})