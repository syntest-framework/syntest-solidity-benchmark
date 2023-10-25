const MoshiachCoinStaking = artifacts.require("MoshiachCoinStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MoshiachCoinStaking', (accounts) => {
	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingapZG2Ps = await MoshiachCoinStaking.new({from: accounts[2]});
		await MoshiachCoinStakingapZG2Ps.onlyOwner.call({from: accounts[3]});
		const uintraNWoqh = await MoshiachCoinStakingapZG2Ps.getStakingAndDaoAmount.call({from: accounts[2]});
		await MoshiachCoinStakingapZG2Ps.claimDivs.call({from: accounts[3]});

		await expect(MoshiachCoinStakingapZG2Ps.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingrC4QkwI = await MoshiachCoinStaking.new({from: accounts[3]});
		const uintGrSBsZ = BigInt("274")
		const uinth6LjMQf = BigInt("1657")
		const addressmBde89h = accounts[0]
		const addressGd8QGaV = accounts[2]
		await MoshiachCoinStakingrC4QkwI.claimDivs.call({from: "0x0000000000000000000000000000000000000001"});
		await MoshiachCoinStakingrC4QkwI.claimDivs.call({from: accounts[1]});
		const uint2R7oWi = await MoshiachCoinStakingrC4QkwI.deposit.call(uintGrSBsZ, {from: accounts[5]});
		await MoshiachCoinStakingrC4QkwI.onlyOwner.call({from: accounts[4]});
		const addressNPKpDVs = await MoshiachCoinStakingrC4QkwI.transferAnyERC20Tokens.call(addressGd8QGaV, addressmBde89h, uinth6LjMQf, {from: accounts[4]});

		await expect(MoshiachCoinStakingrC4QkwI.claimDivs.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingWtmN2MH = await MoshiachCoinStaking.new({from: accounts[2]});
		const uintWSTreY = BigInt("1970")
		const addressciNSUmU = accounts[2]
		const addressO082V56 = accounts[4]
		const uintTnvyzFK = await MoshiachCoinStakingWtmN2MH.withdraw.call(uintWSTreY, {from: accounts[2]});
		await MoshiachCoinStakingWtmN2MH.claimDivs.call({from: accounts[5]});
		const uintSDKxcPJ = await MoshiachCoinStakingWtmN2MH.getPendingDivs.call(addressciNSUmU, {from: accounts[1]});
		const uintuWjfY9S = await MoshiachCoinStakingWtmN2MH.getPendingDivs.call(addressO082V56, {from: accounts[2]});

		await expect(MoshiachCoinStakingWtmN2MH.withdraw.call(uintWSTreY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingaMKiJG = await MoshiachCoinStaking.new({from: accounts[2]});
		const addressmSInvH2 = accounts[4]
		const addressJV2XNkN = accounts[1]
		const uintBJemqKD = await MoshiachCoinStakingaMKiJG.getPendingDivs.call(addressmSInvH2, {from: accounts[1]});
		const uintiFs8FN = await MoshiachCoinStakingaMKiJG.getNumberOfHolders.call({from: accounts[2]});
		await MoshiachCoinStakingaMKiJG.onlyOwner.call({from: accounts[1]});
		const uintbx8RhOz = await MoshiachCoinStakingaMKiJG.getStakingAndDaoAmount.call({from: accounts[3]});
		const uintF4YeBMG = await MoshiachCoinStakingaMKiJG.getPendingDivs.call(addressJV2XNkN, {from: accounts[0]});

		assert.equal(uintBJemqKD, BigInt("0"))
		assert.equal(uintiFs8FN, BigInt("0"))
		await expect(MoshiachCoinStakingaMKiJG.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingtYsWQZw = await MoshiachCoinStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressNOXVPrb = accounts[4]
		const addressOyjUK1t = accounts[0]
		const uintkVgKCu5 = await MoshiachCoinStakingtYsWQZw.getNumberOfHolders.call({from: accounts[1]});
		const addressFolaSLD = await MoshiachCoinStakingtYsWQZw.transferOwnership.call(addressNOXVPrb, {from: "0x0000000000000000000000000000000000000001"});
		const uintJrBeWZF = await MoshiachCoinStakingtYsWQZw.getPendingDivs.call(addressOyjUK1t, {from: accounts[5]});
		const uintpGtqRCp = await MoshiachCoinStakingtYsWQZw.getNumberOfHolders.call({from: accounts[4]});
		await MoshiachCoinStakingtYsWQZw.claimDivs.call({from: accounts[2]});
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingQzLT9oy = await MoshiachCoinStaking.new({from: accounts[3]});
		const uintVVKJIvx = BigInt("967")
		const addressSi9CaQY = accounts[2]
		const addressx9EwFZ7 = accounts[1]
		await MoshiachCoinStakingQzLT9oy.claimDivs.call({from: accounts[5]});
		const uintamfc2gE = await MoshiachCoinStakingQzLT9oy.getStakingAndDaoAmount.call({from: accounts[0]});
		await MoshiachCoinStakingQzLT9oy.claimDivs.call({from: accounts[0]});
		const addressyfNDDEL = await MoshiachCoinStakingQzLT9oy.transferAnyERC20Tokens.call(addressx9EwFZ7, addressSi9CaQY, uintVVKJIvx, {from: accounts[2]});

		await expect(MoshiachCoinStakingQzLT9oy.claimDivs.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingrC4QkwI = await MoshiachCoinStaking.new({from: accounts[3]});
		const addressrB1yQCy = accounts[3]
		const uintJ4BPkEG = BigInt("274")
		const uintFRr86iC = BigInt("1657")
		const addressedlzbUa = accounts[0]
		const addressio5Pdks = accounts[2]
		const uintzyUQ3Q7 = await MoshiachCoinStakingrC4QkwI.getNumberOfHolders.call({from: accounts[3]});
		await MoshiachCoinStakingrC4QkwI.claimDivs.call({from: "0x0000000000000000000000000000000000000001"});
		const addressp1kGzly = await MoshiachCoinStakingrC4QkwI.transferOwnership.call(addressrB1yQCy, {from: accounts[3]});
		await MoshiachCoinStakingrC4QkwI.claimDivs.call({from: accounts[1]});
		const uint2R7oWi = await MoshiachCoinStakingrC4QkwI.deposit.call(uintJ4BPkEG, {from: accounts[5]});
		await MoshiachCoinStakingrC4QkwI.onlyOwner.call({from: accounts[4]});
		const addressNPKpDVs = await MoshiachCoinStakingrC4QkwI.transferAnyERC20Tokens.call(addressio5Pdks, addressedlzbUa, uintFRr86iC, {from: accounts[4]});

		assert.equal(uintzyUQ3Q7, BigInt("0"))
		await expect(MoshiachCoinStakingrC4QkwI.claimDivs.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingQzLT9oy = await MoshiachCoinStaking.new({from: accounts[3]});
		const uinthVwpub7 = BigInt("275")
		const addressiyKDrsw = accounts[1]
		const addressERDTsBZ = accounts[4]
		const uintZqdDbL = BigInt("491")
		const uintpPWcCeA = BigInt("1994")
		await MoshiachCoinStakingQzLT9oy.claimDivs.call({from: accounts[4]});
		const uintamfc2gE = await MoshiachCoinStakingQzLT9oy.getStakingAndDaoAmount.call({from: accounts[0]});
		const addressJ2qlrY8 = await MoshiachCoinStakingQzLT9oy.transferAnyERC20Tokens.call(addressERDTsBZ, addressiyKDrsw, uinthVwpub7, {from: accounts[3]});
		const uinti18meNM = await MoshiachCoinStakingQzLT9oy.withdraw.call(uintZqdDbL, {from: accounts[2]});
		const uintsVMMhT = await MoshiachCoinStakingQzLT9oy.withdraw.call(uintpPWcCeA, {from: accounts[4]});

		await expect(MoshiachCoinStakingQzLT9oy.claimDivs.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakinge3Zc1O0 = await MoshiachCoinStaking.new({from: accounts[0]});
		const uintMotdDta = BigInt("0")
		const uintKGsue9l = BigInt("97")
		const uintzaafpqN = BigInt("268")
		const uintOwvnwYo = BigInt("153")
		const uintUjG06ti = BigInt("1401")
		await MoshiachCoinStakinge3Zc1O0.claimDivs.call({from: accounts[3]});
		const uintT7m3rJo = await MoshiachCoinStakinge3Zc1O0.deposit.call(uintMotdDta, {from: "0x0000000000000000000000000000000000000001"});
		const uintkGv5biZ = await MoshiachCoinStakinge3Zc1O0.deposit.call(uintKGsue9l, {from: accounts[2]});
		const uintYCCTTql = await MoshiachCoinStakinge3Zc1O0.getNumberOfHolders.call({from: accounts[0]});
		const uintJHbGEFG = await MoshiachCoinStakinge3Zc1O0.getNumberOfHolders.call({from: accounts[4]});
		await MoshiachCoinStakinge3Zc1O0.onlyOwner.call({from: accounts[3]});
		const uint8oYQ6u = await MoshiachCoinStakinge3Zc1O0.deposit.call(uintzaafpqN, {from: accounts[2]});
		const uinteI3ZMrz = await MoshiachCoinStakinge3Zc1O0.deposit.call(uintOwvnwYo, {from: accounts[1]});
		const uintrE7w6Me = await MoshiachCoinStakinge3Zc1O0.deposit.call(uintUjG06ti, {from: accounts[4]});

		await expect(MoshiachCoinStakinge3Zc1O0.claimDivs.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})