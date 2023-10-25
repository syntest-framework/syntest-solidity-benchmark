const VBZRXWrapper = artifacts.require("VBZRXWrapper");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper', (accounts) => {
	it('test for VBZRXWrapper', async () => {
		const contractsHGHbU = await VBZRXWrapper.new({from: accounts[4]});
		const valueRtHQjAT = BigInt("1898")
		const dstmPU6pfC = accounts[3]
		const srcO3fLOfl = accounts[1]
		const accountWcp94m6 = accounts[5]
		const valueC94wZq2 = BigInt("14")
		const dstDI5mNXL = accounts[0]
		const srcGmC4sOZ = "0x0000000000000000000000000000000000000001"
		const nullG7EVGDB = await contractsHGHbU.transferFrom.call(srcO3fLOfl, dstmPU6pfC, valueRtHQjAT, {from: "0x0000000000000000000000000000000000000001"});
		const nullACXs7pJ = await contractsHGHbU.claimable.call(accountWcp94m6, {from: accounts[3]});
		const nullBZua9d8 = await contractsHGHbU.transferFrom.call(srcGmC4sOZ, dstDI5mNXL, valueC94wZq2, {from: accounts[2]});

		await expect(contractsHGHbU.transferFrom.call(srcO3fLOfl, dstmPU6pfC, valueRtHQjAT, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contracte0aPAhw = await VBZRXWrapper.new({from: accounts[0]});
		const accountb8fNRN7 = accounts[4]
		const accountZsWugPY = "0x0000000000000000000000000000000000000001"
		const accountlaFdln3 = accounts[1]
		const nullyOYExor = await contracte0aPAhw.claimable.call(accountb8fNRN7, {from: accounts[5]});
		const nullGAQSRKE = await contracte0aPAhw.claimable.call(accountZsWugPY, {from: accounts[3]});
		const nullHNuIvDa = await contracte0aPAhw.claimable.call(accountlaFdln3, {from: accounts[4]});
		await contracte0aPAhw.exit.call({from: accounts[4]});
		await contracte0aPAhw.exit.call({from: accounts[3]});

		await expect(contracte0aPAhw.claimable.call(accountb8fNRN7, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractWmasuT = await VBZRXWrapper.new({from: accounts[1]});
		const valueeFxJfp1 = BigInt("913")
		await contractWmasuT.deposit.call(valueeFxJfp1, {from: accounts[4]});
		const nullSr7hXYu = await contractWmasuT.claim.call({from: accounts[4]});

		await expect(contractWmasuT.deposit.call(valueeFxJfp1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractitHXjlC = await VBZRXWrapper.new({from: accounts[2]});
		const valuenF6V62g = BigInt("72")
		const dstBhGgBe7 = accounts[3]
		const valueQwoRtvQ = BigInt("1992")
		const nullwlpx66A = await contractitHXjlC.claim.call({from: accounts[4]});
		const nulltnwWjHz = await contractitHXjlC.transfer.call(dstBhGgBe7, valuenF6V62g, {from: accounts[1]});
		const nullNvwVAbw = await contractitHXjlC.claim.call({from: accounts[3]});
		await contractitHXjlC.withdraw.call(valueQwoRtvQ, {from: accounts[2]});

		assert.equal(nullwlpx66A, 0)
		await expect(contractitHXjlC.transfer.call(dstBhGgBe7, valuenF6V62g, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractw9GDnB6 = await VBZRXWrapper.new({from: accounts[2]});
		const valueYKJS38o = BigInt("1804")
		const spendern5Vc2lF = accounts[2]
		const valueKfstMWQ = BigInt("1874")
		const spenderHO1HS8X = accounts[5]
		const valueUJ1kVKc = BigInt("1501")
		const valuecGw1Le = BigInt("636")
		const dstxNwfCps = accounts[2]
		const valuemP5h3Fj = BigInt("1623")
		const spenderCOULuzE = "0x0000000000000000000000000000000000000001"
		const nullQhEcsju = await contractw9GDnB6.approve.call(spendern5Vc2lF, valueYKJS38o, {from: accounts[2]});
		await contractw9GDnB6.exit.call({from: accounts[4]});
		const nullrO3I7QA = await contractw9GDnB6.approve.call(spenderHO1HS8X, valueKfstMWQ, {from: accounts[0]});
		await contractw9GDnB6.withdraw.call(valueUJ1kVKc, {from: accounts[3]});
		const null84rQ5S = await contractw9GDnB6.transfer.call(dstxNwfCps, valuecGw1Le, {from: accounts[0]});
		const nullh3iiKeJ = await contractw9GDnB6.approve.call(spenderCOULuzE, valuemP5h3Fj, {from: accounts[5]});

		assert.equal(nullQhEcsju, true)
		await expect(contractw9GDnB6.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractlQoWDw = await VBZRXWrapper.new({from: "0x0000000000000000000000000000000000000001"});
		const valuey9i02dA = BigInt("1899")
		const spenderorngeOD = accounts[0]
		const nullgoqc8A8 = await contractlQoWDw.approve.call(spenderorngeOD, valuey9i02dA, {from: accounts[0]});
		const nullg6JSXnl = await contractlQoWDw.claim.call({from: accounts[1]});
		const nullZAUiYya = await contractlQoWDw.claim.call({from: accounts[3]});
	});
})