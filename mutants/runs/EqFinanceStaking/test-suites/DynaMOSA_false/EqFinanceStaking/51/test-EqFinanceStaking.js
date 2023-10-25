const EqFinanceStaking = artifacts.require("EqFinanceStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EqFinanceStaking', (accounts) => {
	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingbs9ZMxZ = await EqFinanceStaking.new({from: accounts[2]});
		await EqFinanceStakingbs9ZMxZ.claimDivs.call({from: accounts[3]});
		const uintpKcP3eB = await EqFinanceStakingbs9ZMxZ.getStakingAndDaoAmount.call({from: accounts[3]});
		const uintbiZlzJh = await EqFinanceStakingbs9ZMxZ.getNumberOfHolders.call({from: accounts[5]});

		await expect(EqFinanceStakingbs9ZMxZ.claimDivs.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingoFGv4i = await EqFinanceStaking.new({from: accounts[2]});
		const addressitGursZ = accounts[0]
		const uintEFTMFmt = BigInt("1219")
		const addressO4IHQFN = await EqFinanceStakingoFGv4i.transferOwnership.call(addressitGursZ, {from: accounts[0]});
		await EqFinanceStakingoFGv4i.claimDivs.call({from: accounts[5]});
		const uintelgVFYP = await EqFinanceStakingoFGv4i.getStakingAndDaoAmount.call({from: accounts[0]});
		const uintqlmthxk = await EqFinanceStakingoFGv4i.withdraw.call(uintEFTMFmt, {from: accounts[0]});
		const uintq4s14I2 = await EqFinanceStakingoFGv4i.getNumberOfHolders.call({from: accounts[4]});

		await expect(EqFinanceStakingoFGv4i.transferOwnership.call(addressitGursZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingJoGPKl7 = await EqFinanceStaking.new({from: accounts[5]});
		const uintpZAkjgM = BigInt("1396")
		await EqFinanceStakingJoGPKl7.claimDivs.call({from: accounts[3]});
		const uintbASZwG1 = await EqFinanceStakingJoGPKl7.withdraw.call(uintpZAkjgM, {from: accounts[0]});
		const uintHut1cLg = await EqFinanceStakingJoGPKl7.getNumberOfHolders.call({from: accounts[0]});
		const uintfDqBr3 = await EqFinanceStakingJoGPKl7.getNumberOfHolders.call({from: accounts[5]});
		const uintrCqcHnD = await EqFinanceStakingJoGPKl7.getStakingAndDaoAmount.call({from: accounts[2]});

		await expect(EqFinanceStakingJoGPKl7.claimDivs.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingFpYVHQT = await EqFinanceStaking.new({from: accounts[2]});
		const uintMTjyKVb = BigInt("843")
		const uintr6VNe3D = BigInt("960")
		const uintgUWbAby = await EqFinanceStakingFpYVHQT.getStakingAndDaoAmount.call({from: accounts[5]});
		const uintD6cLVss = await EqFinanceStakingFpYVHQT.deposit.call(uintMTjyKVb, {from: accounts[2]});
		const uintNMRqr7f = await EqFinanceStakingFpYVHQT.deposit.call(uintr6VNe3D, {from: accounts[3]});

		assert.equal(uintgUWbAby, BigInt("3000000000000000000000000"))
		await expect(EqFinanceStakingFpYVHQT.deposit.call(uintMTjyKVb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingkKe8TLD = await EqFinanceStaking.new({from: accounts[3]});
		const uintkhoVj5W = BigInt("1927")
		const addressHfmBv3x = accounts[4]
		const addressri2xucR = accounts[4]
		const uintg96Pkcm = await EqFinanceStakingkKe8TLD.getStakingAndDaoAmount.call({from: accounts[3]});
		await EqFinanceStakingkKe8TLD.onlyOwner.call({from: accounts[3]});
		const addressFPQsJcJ = await EqFinanceStakingkKe8TLD.transferAnyERC20Tokens.call(addressri2xucR, addressHfmBv3x, uintkhoVj5W, {from: accounts[3]});

		assert.equal(uintg96Pkcm, BigInt("3000000000000000000000000"))
		await expect(EqFinanceStakingkKe8TLD.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingfS0vCx = await EqFinanceStaking.new({from: accounts[4]});
		const uintmBDkVX = BigInt("0")
		const addressllZZYPg = accounts[5]
		await EqFinanceStakingfS0vCx.claimDivs.call({from: accounts[2]});
		const uintWnKoEFn = await EqFinanceStakingfS0vCx.withdraw.call(uintmBDkVX, {from: accounts[2]});
		const uintCKRnL1F = await EqFinanceStakingfS0vCx.getPendingDivs.call(addressllZZYPg, {from: accounts[1]});

		await expect(EqFinanceStakingfS0vCx.claimDivs.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingQsscqa9 = await EqFinanceStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintldzItVq = BigInt("15")
		const uintCzGfXGW = BigInt("28")
		const uintismXuoh = await EqFinanceStakingQsscqa9.deposit.call(uintldzItVq, {from: accounts[3]});
		const uintMQKDnoe = await EqFinanceStakingQsscqa9.withdraw.call(uintCzGfXGW, {from: accounts[4]});
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingFpYVHQT = await EqFinanceStaking.new({from: accounts[2]});
		const addressObyoqB = "0x0000000000000000000000000000000000000001"
		const uintMkNPqG6 = await EqFinanceStakingFpYVHQT.getNumberOfHolders.call({from: accounts[2]});
		const uintgUWbAby = await EqFinanceStakingFpYVHQT.getStakingAndDaoAmount.call({from: accounts[5]});
		const uintp8Azw3 = await EqFinanceStakingFpYVHQT.getNumberOfHolders.call({from: accounts[2]});
		const addressa5H9gcx = await EqFinanceStakingFpYVHQT.transferOwnership.call(addressObyoqB, {from: accounts[2]});

		assert.equal(uintMkNPqG6, BigInt("0"))
		assert.equal(uintgUWbAby, BigInt("3000000000000000000000000"))
		assert.equal(uintp8Azw3, BigInt("0"))
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingFpYVHQT = await EqFinanceStaking.new({from: accounts[2]});
		const uintDOYXSrs = BigInt("0")
		const uintgUWbAby = await EqFinanceStakingFpYVHQT.getStakingAndDaoAmount.call({from: accounts[5]});
		const uintna0PjJn = await EqFinanceStakingFpYVHQT.deposit.call(uintDOYXSrs, {from: accounts[2]});
		const uintdLPA0ke = await EqFinanceStakingFpYVHQT.getStakingAndDaoAmount.call({from: accounts[2]});

		assert.equal(uintgUWbAby, BigInt("3000000000000000000000000"))
		await expect(EqFinanceStakingFpYVHQT.deposit.call(uintDOYXSrs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingfS0vCx = await EqFinanceStaking.new({from: accounts[4]});
		const uintHBZhmoc = BigInt("618")
		const addressZlKb9zV = "0x0000000000000000000000000000000000000001"
		const addressl14QXYm = accounts[4]
		const uintVA1qG8n = BigInt("35")
		const uintg7TcvI = BigInt("0")
		await EqFinanceStakingfS0vCx.claimDivs.call({from: accounts[2]});
		const addressEsUxpyH = await EqFinanceStakingfS0vCx.transferAnyERC20Tokens.call(addressl14QXYm, addressZlKb9zV, uintHBZhmoc, {from: accounts[4]});
		const uintNCva3d0 = await EqFinanceStakingfS0vCx.getStakingAndDaoAmount.call({from: accounts[2]});
		const uintFE9F8KV = await EqFinanceStakingfS0vCx.getStakingAndDaoAmount.call({from: "0x0000000000000000000000000000000000000001"});
		const uintfIQajgg = await EqFinanceStakingfS0vCx.getNumberOfHolders.call({from: accounts[1]});
		const uintLiAlEw = await EqFinanceStakingfS0vCx.getStakingAndDaoAmount.call({from: accounts[5]});
		const uintk5VQu2S = await EqFinanceStakingfS0vCx.getNumberOfHolders.call({from: accounts[0]});
		const uintpnvlSVs = await EqFinanceStakingfS0vCx.deposit.call(uintVA1qG8n, {from: accounts[2]});
		const uintWnKoEFn = await EqFinanceStakingfS0vCx.withdraw.call(uintg7TcvI, {from: accounts[2]});
		const uintPwGIVX6 = await EqFinanceStakingfS0vCx.getStakingAndDaoAmount.call({from: accounts[0]});

		await expect(EqFinanceStakingfS0vCx.claimDivs.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})