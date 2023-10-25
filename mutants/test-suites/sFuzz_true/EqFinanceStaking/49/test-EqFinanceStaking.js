const EqFinanceStaking = artifacts.require("EqFinanceStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EqFinanceStaking', (accounts) => {
	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingsBKRyhx = await EqFinanceStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintOMB8pbu = BigInt("283")
		const addressvWliNpg = accounts[2]
		const addressD8eEYd = "0x0000000000000000000000000000000000000001"
		const uintEu4J3dV = BigInt("298")
		const addressbcsv50r = accounts[1]
		const addressl7i1sah = "0x0000000000000000000000000000000000000001"
		const addressfpzBaak = await EqFinanceStakingsBKRyhx.transferAnyERC20Tokens.call(addressD8eEYd, addressvWliNpg, uintOMB8pbu, {from: accounts[0]});
		const uintLip631O = await EqFinanceStakingsBKRyhx.deposit.call(uintEu4J3dV, {from: accounts[4]});
		const uint3WzLI0 = await EqFinanceStakingsBKRyhx.getPendingDivs.call(addressbcsv50r, {from: accounts[0]});
		const uintMyRN5P = await EqFinanceStakingsBKRyhx.getPendingDivs.call(addressl7i1sah, {from: accounts[3]});
		await EqFinanceStakingsBKRyhx.onlyOwner.call({from: accounts[3]});
		await EqFinanceStakingsBKRyhx.onlyOwner.call({from: accounts[2]});
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingEKpWkYy = await EqFinanceStaking.new({from: accounts[0]});
		const addressuwViuTu = accounts[5]
		const uintTMR6BnJ = BigInt("1229")
		const uintrujML6x = await EqFinanceStakingEKpWkYy.getPendingDivs.call(addressuwViuTu, {from: accounts[1]});
//		const uintkvVW30t = await EqFinanceStakingEKpWkYy.withdraw.call(uintTMR6BnJ, {from: accounts[2]});
//		await EqFinanceStakingEKpWkYy.onlyOwner.call({from: accounts[1]});
//		await EqFinanceStakingEKpWkYy.claimDivs.call({from: accounts[4]});

		assert.equal(uintrujML6x, BigInt("0"))
		await expect(EqFinanceStakingEKpWkYy.withdraw.call(uintTMR6BnJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingdnccv6W = await EqFinanceStaking.new({from: accounts[4]});
		const addressOaoUpRs = accounts[0]
		const uintFIAr3Si = BigInt("875")
		const addresslGM8cRN = accounts[4]
		const uintoDMcQN = BigInt("875")
		const uintWuaVBxf = await EqFinanceStakingdnccv6W.getPendingDivs.call(addressOaoUpRs, {from: accounts[3]});
//		const uintNxEme8k = await EqFinanceStakingdnccv6W.deposit.call(uintFIAr3Si, {from: accounts[4]});
//		const addressVML8g9D = await EqFinanceStakingdnccv6W.transferOwnership.call(addresslGM8cRN, {from: accounts[2]});
//		const uintGPpzchb = await EqFinanceStakingdnccv6W.deposit.call(uintoDMcQN, {from: accounts[2]});

		assert.equal(uintWuaVBxf, BigInt("0"))
		await expect(EqFinanceStakingdnccv6W.deposit.call(uintFIAr3Si, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingAAly1CS = await EqFinanceStaking.new({from: accounts[2]});
//		await EqFinanceStakingAAly1CS.claimDivs.call({from: accounts[0]});
//		await EqFinanceStakingAAly1CS.onlyOwner.call({from: accounts[2]});

		await expect(EqFinanceStakingAAly1CS.claimDivs.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingJNbBGj = await EqFinanceStaking.new({from: accounts[2]});
		const uintvH6kF1j = BigInt("2017")
		const uintIy9M8G = await EqFinanceStakingJNbBGj.getStakingAndDaoAmount.call({from: "0x0000000000000000000000000000000000000001"});
//		await EqFinanceStakingJNbBGj.onlyOwner.call({from: accounts[0]});
//		const uintE2J6LcA = await EqFinanceStakingJNbBGj.deposit.call(uintvH6kF1j, {from: accounts[4]});

		assert.equal(uintIy9M8G, BigInt("3000000000000000000000000"))
		await expect(EqFinanceStakingJNbBGj.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingAAly1CS = await EqFinanceStaking.new({from: accounts[2]});
		const uinthkBgXN3 = await EqFinanceStakingAAly1CS.getNumberOfHolders.call({from: accounts[5]});
//		await EqFinanceStakingAAly1CS.claimDivs.call({from: accounts[0]});
//		await EqFinanceStakingAAly1CS.onlyOwner.call({from: accounts[2]});

		assert.equal(uinthkBgXN3, BigInt("0"))
		await expect(EqFinanceStakingAAly1CS.claimDivs.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingAAly1CS = await EqFinanceStaking.new({from: accounts[2]});
		const uintI0jwLc = BigInt("1367")
		const addressqdZ8nO = accounts[1]
		const addressp25OvHa = "0x0000000000000000000000000000000000000001"
//		const addressK02ev1 = await EqFinanceStakingAAly1CS.transferAnyERC20Tokens.call(addressp25OvHa, addressqdZ8nO, uintI0jwLc, {from: accounts[2]});
//		await EqFinanceStakingAAly1CS.claimDivs.call({from: accounts[0]});
//		const uintR9qbnpB = await EqFinanceStakingAAly1CS.getNumberOfHolders.call({from: accounts[3]});

		await expect(EqFinanceStakingAAly1CS.transferAnyERC20Tokens.call(addressp25OvHa, addressqdZ8nO, uintI0jwLc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingvZsdeyr = await EqFinanceStaking.new({from: accounts[0]});
		const addresswUFSW0R = "0x0000000000000000000000000000000000000001"
		const uintbPcy6u4 = await EqFinanceStakingvZsdeyr.getNumberOfHolders.call({from: accounts[5]});
		const addresse7nynny = await EqFinanceStakingvZsdeyr.transferOwnership.call(addresswUFSW0R, {from: accounts[0]});
		const uintmcbXUi5 = await EqFinanceStakingvZsdeyr.getStakingAndDaoAmount.call({from: accounts[3]});

		assert.equal(uintbPcy6u4, BigInt("0"))
		assert.equal(uintmcbXUi5, BigInt("3000000000000000000000000"))
	});
})