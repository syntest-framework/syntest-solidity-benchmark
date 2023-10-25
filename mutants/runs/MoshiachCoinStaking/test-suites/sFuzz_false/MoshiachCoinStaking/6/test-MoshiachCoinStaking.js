const MoshiachCoinStaking = artifacts.require("MoshiachCoinStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MoshiachCoinStaking', (accounts) => {
	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingwla6fU = await MoshiachCoinStaking.new({from: accounts[0]});
		const addressFWiRWW8 = accounts[1]
		const uintH9Ljqwn = await MoshiachCoinStakingwla6fU.getNumberOfHolders.call({from: accounts[3]});
		const addresspuL6qL2 = await MoshiachCoinStakingwla6fU.transferOwnership.call(addressFWiRWW8, {from: accounts[0]});
		const uintwNj5zmT = await MoshiachCoinStakingwla6fU.getStakingAndDaoAmount.call({from: accounts[1]});

		assert.equal(uintH9Ljqwn, BigInt("0"))
		assert.equal(uintwNj5zmT, BigInt("60000000000000000000000000"))
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakinghAA2f9R = await MoshiachCoinStaking.new({from: accounts[4]});
		const addressseVwTwh = accounts[5]
		await MoshiachCoinStakinghAA2f9R.claimDivs.call({from: accounts[2]});
		const uintG0UdKj = await MoshiachCoinStakinghAA2f9R.getNumberOfHolders.call({from: accounts[4]});
		const uintFCZ1v59 = await MoshiachCoinStakinghAA2f9R.getPendingDivs.call(addressseVwTwh, {from: accounts[4]});

		await expect(MoshiachCoinStakinghAA2f9R.claimDivs.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingQcv7XTJ = await MoshiachCoinStaking.new({from: accounts[5]});
		const addresskFde8Er = accounts[0]
		const uintoJOG9Mg = BigInt("231")
		const addressVmjaZ6 = accounts[3]
		const uintiiJvCwN = await MoshiachCoinStakingQcv7XTJ.getPendingDivs.call(addresskFde8Er, {from: "0x0000000000000000000000000000000000000001"});
		const uintTbGlRLI = await MoshiachCoinStakingQcv7XTJ.deposit.call(uintoJOG9Mg, {from: accounts[1]});
		const addressFf6GWq5 = await MoshiachCoinStakingQcv7XTJ.transferOwnership.call(addressVmjaZ6, {from: accounts[3]});

		assert.equal(uintiiJvCwN, BigInt("0"))
		await expect(MoshiachCoinStakingQcv7XTJ.deposit.call(uintoJOG9Mg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingGik24jV = await MoshiachCoinStaking.new({from: accounts[2]});
		const uintejv6Qt2 = BigInt("1160")
		const uintqqd3mE0 = BigInt("1386")
		const uintid5B9RV = await MoshiachCoinStakingGik24jV.withdraw.call(uintejv6Qt2, {from: "0x0000000000000000000000000000000000000001"});
		await MoshiachCoinStakingGik24jV.claimDivs.call({from: accounts[5]});
		const uintx1mCkoR = await MoshiachCoinStakingGik24jV.withdraw.call(uintqqd3mE0, {from: accounts[4]});

		await expect(MoshiachCoinStakingGik24jV.withdraw.call(uintejv6Qt2, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingvboxdYt = await MoshiachCoinStaking.new({from: accounts[2]});
		const uintXniAgxq = BigInt("670")
		const addressBRPSb2G = accounts[1]
		const addressESLeJ67 = accounts[4]
		await MoshiachCoinStakingvboxdYt.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const addresswCwkckE = await MoshiachCoinStakingvboxdYt.transferAnyERC20Tokens.call(addressESLeJ67, addressBRPSb2G, uintXniAgxq, {from: accounts[4]});

		await expect(MoshiachCoinStakingvboxdYt.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingxefPMSl = await MoshiachCoinStaking.new({from: "0x0000000000000000000000000000000000000001"});
		await MoshiachCoinStakingxefPMSl.claimDivs.call({from: accounts[2]});
		await MoshiachCoinStakingxefPMSl.claimDivs.call({from: "0x0000000000000000000000000000000000000001"});
		const uintEsOowQB = await MoshiachCoinStakingxefPMSl.getStakingAndDaoAmount.call({from: accounts[0]});
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingvboxdYt = await MoshiachCoinStaking.new({from: accounts[2]});
		const uintqZE3bLR = BigInt("1980")
		const addressUSFTsSR = accounts[1]
		const addressVyK7oqR = accounts[3]
		const uintGKSPLAc = BigInt("670")
		const addressksp3au = accounts[1]
		const addressU63uAx = accounts[4]
		const addressNYcpcRM = await MoshiachCoinStakingvboxdYt.transferAnyERC20Tokens.call(addressVyK7oqR, addressUSFTsSR, uintqZE3bLR, {from: accounts[2]});
		const addresswCwkckE = await MoshiachCoinStakingvboxdYt.transferAnyERC20Tokens.call(addressU63uAx, addressksp3au, uintGKSPLAc, {from: accounts[4]});

		await expect(MoshiachCoinStakingvboxdYt.transferAnyERC20Tokens.call(addressVyK7oqR, addressUSFTsSR, uintqZE3bLR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})