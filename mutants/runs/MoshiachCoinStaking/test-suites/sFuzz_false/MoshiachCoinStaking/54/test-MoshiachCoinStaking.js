const MoshiachCoinStaking = artifacts.require("MoshiachCoinStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MoshiachCoinStaking', (accounts) => {
	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingFBnfqPo = await MoshiachCoinStaking.new({from: accounts[1]});
		const addressamN709 = "0x0000000000000000000000000000000000000001"
		const uintQDehxcV = BigInt("1898")
		const uintcP1diS = await MoshiachCoinStakingFBnfqPo.getPendingDivs.call(addressamN709, {from: "0x0000000000000000000000000000000000000001"});
		const uintNmBhtYv = await MoshiachCoinStakingFBnfqPo.deposit.call(uintQDehxcV, {from: accounts[2]});

		assert.equal(uintcP1diS, BigInt("0"))
		await expect(MoshiachCoinStakingFBnfqPo.deposit.call(uintQDehxcV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingNpACo2P = await MoshiachCoinStaking.new({from: accounts[1]});
		const uintRPQco5u = await MoshiachCoinStakingNpACo2P.getStakingAndDaoAmount.call({from: accounts[0]});
		const uintNFWMyeK = await MoshiachCoinStakingNpACo2P.getNumberOfHolders.call({from: accounts[4]});
		await MoshiachCoinStakingNpACo2P.claimDivs.call({from: accounts[3]});
		const uintqiYF3VB = await MoshiachCoinStakingNpACo2P.getNumberOfHolders.call({from: accounts[4]});

		assert.equal(uintNFWMyeK, BigInt("0"))
		assert.equal(uintRPQco5u, BigInt("60000000000000000000000000"))
		await expect(MoshiachCoinStakingNpACo2P.claimDivs.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingESAReNd = await MoshiachCoinStaking.new({from: accounts[0]});
		const addressDHkdDvg = accounts[3]
		const uintE87dAFa = BigInt("445")
		const uintlPPYqIk = BigInt("1153")
		const uintNQ8uGo9 = await MoshiachCoinStakingESAReNd.getPendingDivs.call(addressDHkdDvg, {from: accounts[5]});
		await MoshiachCoinStakingESAReNd.claimDivs.call({from: accounts[4]});
		const uintRfqRToo = await MoshiachCoinStakingESAReNd.withdraw.call(uintE87dAFa, {from: accounts[4]});
		const uintSQn343p = await MoshiachCoinStakingESAReNd.getNumberOfHolders.call({from: accounts[1]});
		const uintGoxqvcJ = await MoshiachCoinStakingESAReNd.deposit.call(uintlPPYqIk, {from: accounts[4]});
		const uintmYTBxVz = await MoshiachCoinStakingESAReNd.getNumberOfHolders.call({from: accounts[4]});

		assert.equal(uintNQ8uGo9, BigInt("0"))
		await expect(MoshiachCoinStakingESAReNd.claimDivs.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingXrLdfhO = await MoshiachCoinStaking.new({from: accounts[0]});
		const addressCZu78WR = accounts[5]
		await MoshiachCoinStakingXrLdfhO.onlyOwner.call({from: accounts[2]});
		await MoshiachCoinStakingXrLdfhO.claimDivs.call({from: accounts[0]});
		const uintgEQK1TP = await MoshiachCoinStakingXrLdfhO.getStakingAndDaoAmount.call({from: "0x0000000000000000000000000000000000000001"});
		const uintIyOflVv = await MoshiachCoinStakingXrLdfhO.getStakingAndDaoAmount.call({from: accounts[4]});
		const addressalShdJ = await MoshiachCoinStakingXrLdfhO.transferOwnership.call(addressCZu78WR, {from: accounts[4]});
		const uintHHJ79j = await MoshiachCoinStakingXrLdfhO.getNumberOfHolders.call({from: accounts[0]});

		await expect(MoshiachCoinStakingXrLdfhO.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingzUEwPzq = await MoshiachCoinStaking.new({from: accounts[1]});
		const addressYsC1Nj2 = accounts[5]
		const addressA5KIquQ = accounts[1]
		const addressTQm46Xa = await MoshiachCoinStakingzUEwPzq.transferOwnership.call(addressYsC1Nj2, {from: accounts[1]});
		const uintm0FDxNc = await MoshiachCoinStakingzUEwPzq.getStakingAndDaoAmount.call({from: accounts[0]});
		const uintiOdKNTC = await MoshiachCoinStakingzUEwPzq.getStakingAndDaoAmount.call({from: accounts[1]});
		await MoshiachCoinStakingzUEwPzq.claimDivs.call({from: accounts[0]});
		const addressP7q8M4m = await MoshiachCoinStakingzUEwPzq.transferOwnership.call(addressA5KIquQ, {from: accounts[2]});

		assert.equal(uintiOdKNTC, BigInt("60000000000000000000000000"))
		assert.equal(uintm0FDxNc, BigInt("60000000000000000000000000"))
		await expect(MoshiachCoinStakingzUEwPzq.claimDivs.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingZgW3gf = await MoshiachCoinStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintbifwsS = BigInt("626")
		const uintoD1nya = BigInt("1304")
		const uintk31dDZB = await MoshiachCoinStakingZgW3gf.withdraw.call(uintbifwsS, {from: accounts[1]});
		const uintdb2Byhc = await MoshiachCoinStakingZgW3gf.deposit.call(uintoD1nya, {from: accounts[0]});
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingLSvNth = await MoshiachCoinStaking.new({from: accounts[1]});
		const uintXicn4ag = BigInt("1724")
		const addressuLyYWIm = accounts[3]
		const addressvCgd9V = accounts[3]
		const addressqhDwr6d = accounts[4]
		await MoshiachCoinStakingLSvNth.claimDivs.call({from: accounts[3]});
		const uintnaDbwqg = await MoshiachCoinStakingLSvNth.getNumberOfHolders.call({from: accounts[5]});
		const addressTfpkh7i = await MoshiachCoinStakingLSvNth.transferAnyERC20Tokens.call(addressvCgd9V, addressuLyYWIm, uintXicn4ag, {from: accounts[1]});
		const addresskBzGEaX = await MoshiachCoinStakingLSvNth.transferOwnership.call(addressqhDwr6d, {from: accounts[2]});
		await MoshiachCoinStakingLSvNth.claimDivs.call({from: accounts[0]});

		await expect(MoshiachCoinStakingLSvNth.claimDivs.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})