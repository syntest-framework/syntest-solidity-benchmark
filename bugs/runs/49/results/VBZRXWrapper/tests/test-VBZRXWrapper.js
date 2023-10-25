const VBZRXWrapper = artifacts.require("VBZRXWrapper");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper', (accounts) => {
	it('test for VBZRXWrapper', async () => {
		const contract2tGesY = await VBZRXWrapper.new({from: accounts[1]});
		const accountTitRNv = accounts[0]
		const valueHx4UXrl = BigInt("925")
		const dstHYkPjhC = accounts[4]
		const valueiIFtPNq = BigInt("58")
		const spenderAxo9wrO = accounts[1]
		const nulldy4BGAY = await contract2tGesY.claimable.call(accountTitRNv, {from: accounts[3]});
		const null4HKtx2 = await contract2tGesY.transfer.call(dstHYkPjhC, valueHx4UXrl, {from: accounts[5]});
		await contract2tGesY.exit.call({from: accounts[4]});
		const nullNRKFLL = await contract2tGesY.approve.call(spenderAxo9wrO, valueiIFtPNq, {from: accounts[0]});

		await expect(contract2tGesY.claimable.call(accountTitRNv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractOPL3HI = await VBZRXWrapper.new({from: accounts[2]});
		const valuettxMGyg = BigInt("1338")
		const spenderuHMkbHD = accounts[1]
		const valuePR0Kvhi = BigInt("2014")
		const spenderRNiBwkR = accounts[4]
		const value88aC5v = BigInt("135")
		const nullYKdABTf = await contractOPL3HI.approve.call(spenderuHMkbHD, valuettxMGyg, {from: accounts[1]});
		await contractOPL3HI.exit.call({from: accounts[1]});
		const nullAOKB7Rs = await contractOPL3HI.approve.call(spenderRNiBwkR, valuePR0Kvhi, {from: "0x0000000000000000000000000000000000000001"});
		await contractOPL3HI.deposit.call(value88aC5v, {from: accounts[4]});

		assert.equal(nullYKdABTf, true)
		await expect(contractOPL3HI.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractJzxX5S = await VBZRXWrapper.new({from: accounts[1]});
		const valuejRrc2Om = BigInt("890")
		const accountPv8xjgC = accounts[1]
		const valuei2RRv42 = BigInt("1787")
		const valuerqB4BwA = BigInt("1075")
		const dstG8ZVSP = accounts[4]
		const srcdxkmMj = accounts[3]
		await contractJzxX5S.deposit.call(valuejRrc2Om, {from: accounts[0]});
		const nulllVRE3g = await contractJzxX5S.claimable.call(accountPv8xjgC, {from: accounts[3]});
		const nullQm7mmUI = await contractJzxX5S.claim.call({from: accounts[2]});
		await contractJzxX5S.deposit.call(valuei2RRv42, {from: accounts[4]});
		const nullYuNmzis = await contractJzxX5S.claim.call({from: accounts[0]});
		const nullaaRW8Fi = await contractJzxX5S.transferFrom.call(srcdxkmMj, dstG8ZVSP, valuerqB4BwA, {from: accounts[2]});

		await expect(contractJzxX5S.deposit.call(valuejRrc2Om, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractCS75CCQ = await VBZRXWrapper.new({from: accounts[4]});
		const valueHZjYWA = BigInt("1113")
		const spenderhXWrCA4 = accounts[1]
		const valueXo7DZmp = BigInt("1545")
		const dstKWMroAa = accounts[0]
		const srcbVe0n4U = accounts[1]
		const valuevSxxL9 = BigInt("1878")
		const dstsDK2SI = accounts[0]
		const srcMoWhpeC = accounts[0]
		const nullfo8YUTk = await contractCS75CCQ.approve.call(spenderhXWrCA4, valueHZjYWA, {from: accounts[4]});
		const nullqwcKlZh = await contractCS75CCQ.transferFrom.call(srcbVe0n4U, dstKWMroAa, valueXo7DZmp, {from: accounts[1]});
		const nullB0emOHF = await contractCS75CCQ.transferFrom.call(srcMoWhpeC, dstsDK2SI, valuevSxxL9, {from: accounts[3]});
		await contractCS75CCQ.exit.call({from: accounts[2]});
		await contractCS75CCQ.exit.call({from: accounts[3]});
		const nullFYweCQ = await contractCS75CCQ.claim.call({from: accounts[4]});

		assert.equal(nullfo8YUTk, true)
		await expect(contractCS75CCQ.transferFrom.call(srcbVe0n4U, dstKWMroAa, valueXo7DZmp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractoL9SIjB = await VBZRXWrapper.new({from: "0x0000000000000000000000000000000000000001"});
		const valueG17YpOx = BigInt("123")
		const dstA4QfM1B = accounts[2]
		const srcs63Sh3u = accounts[2]
		const valueP6o1ma9 = BigInt("1632")
		const valueI30rEzD = BigInt("773")
		const spenderrtEuWI = "0x0000000000000000000000000000000000000001"
		const accountMjXY3Mv = accounts[3]
		await contractoL9SIjB.exit.call({from: accounts[5]});
		const nulleJIs7vX = await contractoL9SIjB.transferFrom.call(srcs63Sh3u, dstA4QfM1B, valueG17YpOx, {from: "0x0000000000000000000000000000000000000001"});
		await contractoL9SIjB.withdraw.call(valueP6o1ma9, {from: accounts[0]});
		const nullY58TLu = await contractoL9SIjB.approve.call(spenderrtEuWI, valueI30rEzD, {from: accounts[3]});
		const nullZlBttx = await contractoL9SIjB.claimable.call(accountMjXY3Mv, {from: accounts[2]});
	});

	it('test for VBZRXWrapper', async () => {
		const contractvmdT9w3 = await VBZRXWrapper.new({from: accounts[3]});
		const valueLJuKP0R = BigInt("1357")
		const dstZRTiOU6 = accounts[2]
		const valuebkD3Nzb = BigInt("252")
		const valuep6cw5rw = BigInt("1472")
		const spenderRIY5eK = accounts[4]
		const nullvNAjuo1 = await contractvmdT9w3.transfer.call(dstZRTiOU6, valueLJuKP0R, {from: accounts[0]});
		await contractvmdT9w3.deposit.call(valuebkD3Nzb, {from: accounts[1]});
		const nullkCDslTg = await contractvmdT9w3.approve.call(spenderRIY5eK, valuep6cw5rw, {from: accounts[0]});
		await contractvmdT9w3.exit.call({from: accounts[3]});
		await contractvmdT9w3.exit.call({from: accounts[4]});

		await expect(contractvmdT9w3.transfer.call(dstZRTiOU6, valueLJuKP0R, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractXVYVkLM = await VBZRXWrapper.new({from: accounts[2]});
		const valuenHOuTM2 = BigInt("1545")
		const valueJeyKQmN = BigInt("1475")
		const dstfF8EebS = accounts[1]
		const srcQA5Hb1S = accounts[0]
		const nullBxPf7C = await contractXVYVkLM.claim.call({from: accounts[3]});
		await contractXVYVkLM.exit.call({from: accounts[3]});
		await contractXVYVkLM.exit.call({from: accounts[4]});
		await contractXVYVkLM.deposit.call(valuenHOuTM2, {from: accounts[0]});
		const nullPYhJToB = await contractXVYVkLM.transferFrom.call(srcQA5Hb1S, dstfF8EebS, valueJeyKQmN, {from: accounts[3]});

		assert.equal(nullBxPf7C, 0)
		await expect(contractXVYVkLM.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})