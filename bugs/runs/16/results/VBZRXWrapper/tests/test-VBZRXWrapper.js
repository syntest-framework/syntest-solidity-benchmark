const VBZRXWrapper = artifacts.require("VBZRXWrapper");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper', (accounts) => {
	it('test for VBZRXWrapper', async () => {
		const contractWyyIex0 = await VBZRXWrapper.new({from: accounts[0]});
		const valuevfAHI7H = BigInt("1774")
		const spender5YfkbQ = accounts[0]
		const valuekxqOZ0N = BigInt("148")
		const dstCx99hEC = accounts[0]
		const valuevEE3kps = BigInt("961")
		const dstHo6d1y6 = accounts[2]
		const srcpQm6Wqe = accounts[2]
		const valueKiiYgGc = BigInt("1311")
		const dst3xyHxO = accounts[3]
		const srcN5iJtnD = accounts[1]
		const nullKy8awsg = await contractWyyIex0.approve.call(spender5YfkbQ, valuevfAHI7H, {from: accounts[2]});
		const nullGtdFGsI = await contractWyyIex0.transfer.call(dstCx99hEC, valuekxqOZ0N, {from: accounts[1]});
		await contractWyyIex0.exit.call({from: accounts[4]});
		const nullJ86nDyQ = await contractWyyIex0.transferFrom.call(srcpQm6Wqe, dstHo6d1y6, valuevEE3kps, {from: accounts[1]});
		const nullZ1xRh2P = await contractWyyIex0.transferFrom.call(srcN5iJtnD, dst3xyHxO, valueKiiYgGc, {from: accounts[2]});

		assert.equal(nullKy8awsg, true)
		await expect(contractWyyIex0.transfer.call(dstCx99hEC, valuekxqOZ0N, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractxvEZgHe = await VBZRXWrapper.new({from: accounts[5]});
		const valueyYY3Tu = BigInt("1579")
		const dstRSmfCuo = accounts[0]
		const srcwzKeXlj = "0x0000000000000000000000000000000000000001"
		const valuerdr69qP = BigInt("508")
		const spenderv7TWJvA = accounts[0]
		const valuefEmTHz = BigInt("999")
		const dstTytZ1Hx = accounts[2]
		await contractxvEZgHe.exit.call({from: accounts[3]});
		const nullBDzx9MK = await contractxvEZgHe.transferFrom.call(srcwzKeXlj, dstRSmfCuo, valueyYY3Tu, {from: "0x0000000000000000000000000000000000000001"});
		await contractxvEZgHe.exit.call({from: accounts[3]});
		const nullgM0ZRm = await contractxvEZgHe.approve.call(spenderv7TWJvA, valuerdr69qP, {from: accounts[1]});
		const nullIcABveN = await contractxvEZgHe.transfer.call(dstTytZ1Hx, valuefEmTHz, {from: accounts[5]});

		await expect(contractxvEZgHe.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractV1iRxFB = await VBZRXWrapper.new({from: accounts[4]});
		const accountQreLUsl = accounts[0]
		const valuercVckgy = BigInt("136")
		const spenderxktg7ke = accounts[1]
		const valueajsrvMJ = BigInt("1719")
		const spender26SyJQ = "0x0000000000000000000000000000000000000001"
		const accountPpg7dEh = accounts[0]
		const nullZWEWzb6 = await contractV1iRxFB.claimable.call(accountQreLUsl, {from: accounts[1]});
		const nulls2gA7QF = await contractV1iRxFB.approve.call(spenderxktg7ke, valuercVckgy, {from: accounts[4]});
		await contractV1iRxFB.exit.call({from: accounts[3]});
		const nullgw1k8yi = await contractV1iRxFB.approve.call(spender26SyJQ, valueajsrvMJ, {from: accounts[1]});
		const nullpN7UXXT = await contractV1iRxFB.claimable.call(accountPpg7dEh, {from: accounts[2]});

		await expect(contractV1iRxFB.claimable.call(accountQreLUsl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractPL9M9vi = await VBZRXWrapper.new({from: "0x0000000000000000000000000000000000000001"});
		const valueFtac2a4 = BigInt("696")
		const spendera11GAUX = accounts[2]
		const valueZcLOQ31 = BigInt("1859")
		const spenderrfuyIS = accounts[4]
		const nullDyXRAOT = await contractPL9M9vi.approve.call(spendera11GAUX, valueFtac2a4, {from: accounts[2]});
		const nullOEVtnQ9 = await contractPL9M9vi.approve.call(spenderrfuyIS, valueZcLOQ31, {from: accounts[2]});
		await contractPL9M9vi.exit.call({from: accounts[4]});
		await contractPL9M9vi.exit.call({from: accounts[1]});
	});

	it('test for VBZRXWrapper', async () => {
		const contractTDALw4W = await VBZRXWrapper.new({from: accounts[0]});
		const valueTMER9Zg = BigInt("1412")
		const valueBRnwvtI = BigInt("1947")
		const dstNlY3Aay = accounts[1]
		const accounth3ASfq = accounts[3]
		await contractTDALw4W.deposit.call(valueTMER9Zg, {from: accounts[4]});
		const nullfUrXknm = await contractTDALw4W.transfer.call(dstNlY3Aay, valueBRnwvtI, {from: accounts[3]});
		const nullP0pMlav = await contractTDALw4W.claimable.call(accounth3ASfq, {from: accounts[0]});

		await expect(contractTDALw4W.deposit.call(valueTMER9Zg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractZYGE9T = await VBZRXWrapper.new({from: accounts[4]});
		const valuenlnWvo = BigInt("1550")
		const spenderx7T1f6u = accounts[5]
		const valueWgNoCb8 = BigInt("1715")
		const spenderHzusA8q = accounts[2]
		const valuedSNy7qU = BigInt("1863")
		const nulldpKmfH = await contractZYGE9T.approve.call(spenderx7T1f6u, valuenlnWvo, {from: accounts[0]});
		const nullJUKmpE1 = await contractZYGE9T.approve.call(spenderHzusA8q, valueWgNoCb8, {from: accounts[3]});
		const nullytFLhD6 = await contractZYGE9T.claim.call({from: "0x0000000000000000000000000000000000000001"});
		await contractZYGE9T.deposit.call(valuedSNy7qU, {from: accounts[1]});

		assert.equal(nullJUKmpE1, true)
		assert.equal(nulldpKmfH, true)
		assert.equal(nullytFLhD6, 0)
		await expect(contractZYGE9T.deposit.call(valuedSNy7qU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})