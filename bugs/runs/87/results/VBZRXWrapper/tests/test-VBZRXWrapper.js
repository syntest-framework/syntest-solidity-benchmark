const VBZRXWrapper = artifacts.require("VBZRXWrapper");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper', (accounts) => {
	it('test for VBZRXWrapper', async () => {
		const contractC9ClxwK = await VBZRXWrapper.new({from: accounts[3]});
		const accountuoEYkXu = accounts[0]
		const accountqqnnwxA = accounts[4]
		await contractC9ClxwK.exit.call({from: accounts[3]});
		const nulllzVvHAC = await contractC9ClxwK.claimable.call(accountuoEYkXu, {from: accounts[2]});
		await contractC9ClxwK.exit.call({from: accounts[3]});
		const nulldtTiuo2 = await contractC9ClxwK.claimable.call(accountqqnnwxA, {from: accounts[4]});
		await contractC9ClxwK.exit.call({from: accounts[1]});

		await expect(contractC9ClxwK.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractXcqqMRE = await VBZRXWrapper.new({from: accounts[4]});
		const valueDCpU3qZ = BigInt("424")
		const spenderTkKuCl = accounts[5]
		const valuekMAibje = BigInt("939")
		const valueoMhP1Xl = BigInt("669")
		const dstEDUBwsl = "0x0000000000000000000000000000000000000001"
		const srcIx5ViYT = accounts[0]
		const nullq7vdWL = await contractXcqqMRE.approve.call(spenderTkKuCl, valueDCpU3qZ, {from: accounts[3]});
		const nullXqam6Hs = await contractXcqqMRE.claim.call({from: accounts[0]});
		await contractXcqqMRE.deposit.call(valuekMAibje, {from: "0x0000000000000000000000000000000000000001"});
		const nullf7aBRp9 = await contractXcqqMRE.transferFrom.call(srcIx5ViYT, dstEDUBwsl, valueoMhP1Xl, {from: accounts[0]});

		assert.equal(nullXqam6Hs, 0)
		assert.equal(nullq7vdWL, true)
		await expect(contractXcqqMRE.deposit.call(valuekMAibje, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractps77ZXn = await VBZRXWrapper.new({from: accounts[4]});
		const valueIXbRIVH = BigInt("1655")
		const dstSzXlHKC = accounts[1]
		const srcBOyzQKE = accounts[2]
		const valuenyPjYxs = BigInt("980")
		const dstHXd2dMn = accounts[5]
		const srcTy9SLF = accounts[5]
		const accountjR0IPW = accounts[4]
		const nullzn0Xubd = await contractps77ZXn.transferFrom.call(srcBOyzQKE, dstSzXlHKC, valueIXbRIVH, {from: accounts[5]});
		const nullEktHpBL = await contractps77ZXn.transferFrom.call(srcTy9SLF, dstHXd2dMn, valuenyPjYxs, {from: accounts[4]});
		const nullPEbAhdA = await contractps77ZXn.claimable.call(accountjR0IPW, {from: accounts[1]});

		await expect(contractps77ZXn.transferFrom.call(srcBOyzQKE, dstSzXlHKC, valueIXbRIVH, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractR594SSK = await VBZRXWrapper.new({from: "0x0000000000000000000000000000000000000001"});
		const valueAOUMff7 = BigInt("502")
		const dstnzG2GUH = accounts[0]
		const srcov7e1oC = accounts[1]
		const valueOk8yey = BigInt("1573")
		const dstsyXtIg9 = "0x0000000000000000000000000000000000000001"
		const valueTUEudNL = BigInt("524")
		const spenderEngpSZ1 = accounts[2]
		const nullPFDvKM = await contractR594SSK.transferFrom.call(srcov7e1oC, dstnzG2GUH, valueAOUMff7, {from: accounts[0]});
		const nullKa0oSf5 = await contractR594SSK.transfer.call(dstsyXtIg9, valueOk8yey, {from: accounts[1]});
		const nulltHnsFMO = await contractR594SSK.approve.call(spenderEngpSZ1, valueTUEudNL, {from: accounts[1]});
		const nullMvXBlBu = await contractR594SSK.claim.call({from: accounts[4]});
	});

	it('test for VBZRXWrapper', async () => {
		const contractfJi7Kz = await VBZRXWrapper.new({from: accounts[3]});
		const accountSoVfEYQ = accounts[3]
		const nullcQ7HvHu = await contractfJi7Kz.claimable.call(accountSoVfEYQ, {from: "0x0000000000000000000000000000000000000001"});
		await contractfJi7Kz.exit.call({from: accounts[2]});

		await expect(contractfJi7Kz.claimable.call(accountSoVfEYQ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractYAatJfj = await VBZRXWrapper.new({from: accounts[4]});
		const valuebSIrV8P = BigInt("1388")
		const dsto9WcQVl = accounts[2]
		const valuewmNQprs = BigInt("1716")
		const spenderZ8MqObV = accounts[3]
		const nullnWxuTck = await contractYAatJfj.transfer.call(dsto9WcQVl, valuebSIrV8P, {from: accounts[1]});
		await contractYAatJfj.exit.call({from: accounts[2]});
		const nullWhPKYgL = await contractYAatJfj.approve.call(spenderZ8MqObV, valuewmNQprs, {from: accounts[4]});
		await contractYAatJfj.exit.call({from: accounts[2]});

		await expect(contractYAatJfj.transfer.call(dsto9WcQVl, valuebSIrV8P, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})