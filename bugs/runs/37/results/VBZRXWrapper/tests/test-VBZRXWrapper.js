const VBZRXWrapper = artifacts.require("VBZRXWrapper");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper', (accounts) => {
	it('test for VBZRXWrapper', async () => {
		const contractX7NbWaZ = await VBZRXWrapper.new({from: accounts[1]});
		const value2FFaOq = BigInt("1688")
		const nullDqYowmc = await contractX7NbWaZ.claim.call({from: accounts[0]});
		await contractX7NbWaZ.deposit.call(value2FFaOq, {from: accounts[3]});
		await contractX7NbWaZ.exit.call({from: accounts[0]});

		assert.equal(nullDqYowmc, 0)
		await expect(contractX7NbWaZ.deposit.call(value2FFaOq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractoaZFSAX = await VBZRXWrapper.new({from: accounts[4]});
		const valueY7SU4sW = BigInt("1507")
		const spenderQvv89F3 = "0x0000000000000000000000000000000000000001"
		const valuewWBiHuK = BigInt("1896")
		const dstPcgKVOI = accounts[0]
		const srcwVCXsC3 = accounts[2]
		const valueDSn7nhb = BigInt("1605")
		const dstCbpT9Sw = accounts[4]
		const srcUPJf6LU = accounts[1]
		const nullsxESoDX = await contractoaZFSAX.approve.call(spenderQvv89F3, valueY7SU4sW, {from: accounts[4]});
		const nullJxwG5HN = await contractoaZFSAX.transferFrom.call(srcwVCXsC3, dstPcgKVOI, valuewWBiHuK, {from: accounts[4]});
		const nullfp0KyzT = await contractoaZFSAX.transferFrom.call(srcUPJf6LU, dstCbpT9Sw, valueDSn7nhb, {from: accounts[2]});

		assert.equal(nullsxESoDX, true)
		await expect(contractoaZFSAX.transferFrom.call(srcwVCXsC3, dstPcgKVOI, valuewWBiHuK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractEq25qfX = await VBZRXWrapper.new({from: accounts[0]});
		const valueo5lsHJ = BigInt("694")
		const spenderBAJrvwx = accounts[3]
		const value1XSM0X = BigInt("254")
		const spenderBeLvdl4 = accounts[4]
		const valuets1rG1W = BigInt("447")
		const accountr3Jz3eG = accounts[3]
		const nullPj7ompu = await contractEq25qfX.approve.call(spenderBAJrvwx, valueo5lsHJ, {from: accounts[0]});
		const nullzxWIq5Z = await contractEq25qfX.approve.call(spenderBeLvdl4, value1XSM0X, {from: accounts[3]});
		await contractEq25qfX.withdraw.call(valuets1rG1W, {from: accounts[2]});
		const nulllSh2Ts4 = await contractEq25qfX.claimable.call(accountr3Jz3eG, {from: accounts[3]});

		assert.equal(nullPj7ompu, true)
		assert.equal(nullzxWIq5Z, true)
		await expect(contractEq25qfX.withdraw.call(valuets1rG1W, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractFpJ6aR8 = await VBZRXWrapper.new({from: "0x0000000000000000000000000000000000000001"});
		const valueHszCIsN = BigInt("1048")
		const dstmjKqqro = accounts[0]
		const accountCLxmxJf = accounts[4]
		await contractFpJ6aR8.exit.call({from: accounts[5]});
		const nullhnvzlVZ = await contractFpJ6aR8.claim.call({from: accounts[1]});
		const nullXrgiRI0 = await contractFpJ6aR8.transfer.call(dstmjKqqro, valueHszCIsN, {from: accounts[0]});
		const nullAePqhMx = await contractFpJ6aR8.claim.call({from: accounts[0]});
		const nulltiCO6SY = await contractFpJ6aR8.claimable.call(accountCLxmxJf, {from: accounts[0]});
		await contractFpJ6aR8.exit.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for VBZRXWrapper', async () => {
		const contractSzaFlf1 = await VBZRXWrapper.new({from: accounts[4]});
		const valueFSSS5M = BigInt("1684")
		const dstPCPXZT4 = accounts[4]
		const valuecICHPuA = BigInt("1622")
		await contractSzaFlf1.exit.call({from: accounts[5]});
		const nullIvcbwLD = await contractSzaFlf1.claim.call({from: accounts[0]});
		const nullluqh0d = await contractSzaFlf1.transfer.call(dstPCPXZT4, valueFSSS5M, {from: accounts[2]});
		await contractSzaFlf1.deposit.call(valuecICHPuA, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractSzaFlf1.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractK14SBTv = await VBZRXWrapper.new({from: accounts[5]});
		const accountast7FTE = accounts[5]
		const valueTV4BnR8 = BigInt("1587")
		const spenderqWf49QQ = accounts[5]
		const nullKV3XVYR = await contractK14SBTv.claimable.call(accountast7FTE, {from: accounts[3]});
		const nullvBFa7kN = await contractK14SBTv.approve.call(spenderqWf49QQ, valueTV4BnR8, {from: accounts[0]});

		await expect(contractK14SBTv.claimable.call(accountast7FTE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractjJqsu9Q = await VBZRXWrapper.new({from: accounts[5]});
		const valueFyKZtW4 = BigInt("118")
		const dstNKR8pAG = accounts[2]
		const accountGwS5PVu = accounts[7]
		const nullcyVjkif = await contractjJqsu9Q.transfer.call(dstNKR8pAG, valueFyKZtW4, {from: accounts[5]});
		const nulluexoqbr = await contractjJqsu9Q.claimable.call(accountGwS5PVu, {from: accounts[3]});

		await expect(contractjJqsu9Q.transfer.call(dstNKR8pAG, valueFyKZtW4, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})