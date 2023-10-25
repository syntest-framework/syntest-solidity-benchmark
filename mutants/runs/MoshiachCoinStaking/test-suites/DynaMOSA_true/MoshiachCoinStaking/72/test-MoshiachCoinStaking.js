const MoshiachCoinStaking = artifacts.require("MoshiachCoinStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MoshiachCoinStaking', (accounts) => {
	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingZ1gaQ0L = await MoshiachCoinStaking.new({from: accounts[2]});
		const uintKBkaz8K = BigInt("1947")
		const uintcL4xYTd = await MoshiachCoinStakingZ1gaQ0L.deposit.call(uintKBkaz8K, {from: accounts[2]});
		await MoshiachCoinStakingZ1gaQ0L.claimDivs.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(MoshiachCoinStakingZ1gaQ0L.deposit.call(uintKBkaz8K, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingGoXCxJY = await MoshiachCoinStaking.new({from: accounts[1]});
		await MoshiachCoinStakingGoXCxJY.claimDivs.call({from: accounts[1]});
		const uintBtoMbPt = await MoshiachCoinStakingGoXCxJY.getStakingAndDaoAmount.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(MoshiachCoinStakingGoXCxJY.claimDivs.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingY27oBmn = await MoshiachCoinStaking.new({from: accounts[1]});
		const uintq99QeTL = BigInt("1395")
		const uintOb0S9bo = BigInt("1449")
		const address8v11zr = accounts[0]
		const addressTqNqTle = accounts[2]
		await MoshiachCoinStakingY27oBmn.claimDivs.call({from: accounts[2]});
		await MoshiachCoinStakingY27oBmn.claimDivs.call({from: accounts[4]});
		const uintNHic4gZ = await MoshiachCoinStakingY27oBmn.getStakingAndDaoAmount.call({from: "0x0000000000000000000000000000000000000001"});
		const uintuRD1qkq = await MoshiachCoinStakingY27oBmn.withdraw.call(uintq99QeTL, {from: accounts[3]});
		const addressMb2YpaN = await MoshiachCoinStakingY27oBmn.transferAnyERC20Tokens.call(addressTqNqTle, address8v11zr, uintOb0S9bo, {from: accounts[2]});

		await expect(MoshiachCoinStakingY27oBmn.claimDivs.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingjYfmHE3 = await MoshiachCoinStaking.new({from: accounts[4]});
		const uintzPsnCPt = BigInt("1451")
		const addressf2LJ1J = accounts[0]
		const uint184cm0 = BigInt("403")
		const uintGJFcnt1 = await MoshiachCoinStakingjYfmHE3.getNumberOfHolders.call({from: accounts[1]});
		const uintwJpvGEE = await MoshiachCoinStakingjYfmHE3.withdraw.call(uintzPsnCPt, {from: "0x0000000000000000000000000000000000000001"});
		const addressp4Jk6E = await MoshiachCoinStakingjYfmHE3.transferOwnership.call(addressf2LJ1J, {from: accounts[1]});
		const uintZyJi9mR = await MoshiachCoinStakingjYfmHE3.getStakingAndDaoAmount.call({from: "0x0000000000000000000000000000000000000001"});
		const uintG64lDEj = await MoshiachCoinStakingjYfmHE3.getStakingAndDaoAmount.call({from: accounts[1]});
		const uintdMzSuf4 = await MoshiachCoinStakingjYfmHE3.deposit.call(uint184cm0, {from: accounts[5]});

		assert.equal(uintGJFcnt1, BigInt("0"))
		await expect(MoshiachCoinStakingjYfmHE3.withdraw.call(uintzPsnCPt, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingbPxBSvd = await MoshiachCoinStaking.new({from: accounts[4]});
		const uintxmEgOFs = BigInt("1550")
		const uintcPhx9rS = BigInt("1385")
		await MoshiachCoinStakingbPxBSvd.claimDivs.call({from: accounts[1]});
		await MoshiachCoinStakingbPxBSvd.claimDivs.call({from: accounts[1]});
		await MoshiachCoinStakingbPxBSvd.onlyOwner.call({from: accounts[2]});
		const uintswrO4O8 = await MoshiachCoinStakingbPxBSvd.withdraw.call(uintxmEgOFs, {from: accounts[2]});
		const uintpMf55mb = await MoshiachCoinStakingbPxBSvd.withdraw.call(uintcPhx9rS, {from: accounts[1]});

		await expect(MoshiachCoinStakingbPxBSvd.claimDivs.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakings5hqwnE = await MoshiachCoinStaking.new({from: accounts[3]});
		const uintjC4NgeW = BigInt("1064")
		const addresswCBERjC = "0x0000000000000000000000000000000000000001"
		const addressJDEfAt0 = "0x0000000000000000000000000000000000000001"
		const uintFjUdvzz = BigInt("853")
		const addressQEk4Dcw = accounts[2]
		const address8bmRUP = accounts[4]
		const uintdZyTG2H = BigInt("1978")
		const addresskRjq2Lj = await MoshiachCoinStakings5hqwnE.transferAnyERC20Tokens.call(addressJDEfAt0, addresswCBERjC, uintjC4NgeW, {from: accounts[3]});
		const uinty0VzcyT = await MoshiachCoinStakings5hqwnE.getNumberOfHolders.call({from: accounts[1]});
		const uintrugRWo7 = await MoshiachCoinStakings5hqwnE.deposit.call(uintFjUdvzz, {from: accounts[0]});
		const uintfpeKEY = await MoshiachCoinStakings5hqwnE.getPendingDivs.call(addressQEk4Dcw, {from: accounts[5]});
		const addresstayjLqv = await MoshiachCoinStakings5hqwnE.transferOwnership.call(address8bmRUP, {from: accounts[4]});
		const uintJ53OwsU = await MoshiachCoinStakings5hqwnE.withdraw.call(uintdZyTG2H, {from: accounts[4]});

		await expect(MoshiachCoinStakings5hqwnE.transferAnyERC20Tokens.call(addressJDEfAt0, addresswCBERjC, uintjC4NgeW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingNmwhFPD = await MoshiachCoinStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintt6XkA1L = BigInt("748")
		const addresso2M59lr = accounts[0]
		const addressvFMLf6d = accounts[3]
		const addressQ9e5JFM = accounts[1]
		const addressdX899CS = accounts[0]
		const uintXPuQwCi = await MoshiachCoinStakingNmwhFPD.deposit.call(uintt6XkA1L, {from: accounts[2]});
		const addressKvjHnxe = await MoshiachCoinStakingNmwhFPD.transferOwnership.call(addresso2M59lr, {from: accounts[4]});
		await MoshiachCoinStakingNmwhFPD.claimDivs.call({from: accounts[1]});
		const uintutDnIJ5 = await MoshiachCoinStakingNmwhFPD.getPendingDivs.call(addressvFMLf6d, {from: accounts[0]});
		const addressvhw4VIG = await MoshiachCoinStakingNmwhFPD.transferOwnership.call(addressQ9e5JFM, {from: accounts[0]});
		const addressXxIqWK2 = await MoshiachCoinStakingNmwhFPD.transferOwnership.call(addressdX899CS, {from: accounts[0]});
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingHGuVrpo = await MoshiachCoinStaking.new({from: accounts[3]});
		const uintZTIsVPt = BigInt("0")
		const uintZoqQxzR = await MoshiachCoinStakingHGuVrpo.getNumberOfHolders.call({from: accounts[3]});
		const uint7LzZ2Y = await MoshiachCoinStakingHGuVrpo.withdraw.call(uintZTIsVPt, {from: accounts[3]});

		assert.equal(uintZoqQxzR, BigInt("0"))
		await expect(MoshiachCoinStakingHGuVrpo.withdraw.call(uintZTIsVPt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakings5hqwnE = await MoshiachCoinStaking.new({from: accounts[3]});
		const addresskhUJLxN = accounts[4]
		const addresskQta1pf = accounts[4]
		const uintFc63fpB = await MoshiachCoinStakings5hqwnE.getNumberOfHolders.call({from: accounts[2]});
		const addressSyNKWQ4 = await MoshiachCoinStakings5hqwnE.transferOwnership.call(addresskhUJLxN, {from: accounts[3]});
		const addresstayjLqv = await MoshiachCoinStakings5hqwnE.transferOwnership.call(addresskQta1pf, {from: accounts[4]});

		assert.equal(uintFc63fpB, BigInt("0"))
		await expect(MoshiachCoinStakings5hqwnE.transferOwnership.call(addresskQta1pf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakings5hqwnE = await MoshiachCoinStaking.new({from: accounts[3]});
		const uintKim3NJZ = BigInt("1064")
		const addresssBpYtGI = "0x00000000000000000000000000000000000000-1"
		const addressyBP5NMb = "0x0000000000000000000000000000000000000001"
		const addressV5sX8Xn = "0x0000000000000000000000000000000000000001"
		const addresskRjq2Lj = await MoshiachCoinStakings5hqwnE.transferAnyERC20Tokens.call(addressyBP5NMb, addresssBpYtGI, uintKim3NJZ, {from: accounts[3]});
		const uintwMiOCqL = await MoshiachCoinStakings5hqwnE.getPendingDivs.call(addressV5sX8Xn, {from: accounts[0]});

		await expect(MoshiachCoinStakings5hqwnE.transferAnyERC20Tokens.call(addressyBP5NMb, addresssBpYtGI, uintKim3NJZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakings5hqwnE = await MoshiachCoinStaking.new({from: accounts[3]});
		const uintX8HlHMJ = BigInt("0")
		const uinttsaYrsj = BigInt("1064")
		const addressPTuEKTM = "0x00000000000000000000000000000000000000-1"
		const addresshkKYrdE = "0x0000000000000000000000000000000000000001"
		const uintB5AOmb = BigInt("1516")
		const addresscLWGGyS = accounts[2]
		const addressQgB60CA = accounts[1]
		const uintOeL22ns = await MoshiachCoinStakings5hqwnE.deposit.call(uintX8HlHMJ, {from: accounts[1]});
		const addresskRjq2Lj = await MoshiachCoinStakings5hqwnE.transferAnyERC20Tokens.call(addresshkKYrdE, addressPTuEKTM, uinttsaYrsj, {from: accounts[3]});
		const uintrTesQcx = await MoshiachCoinStakings5hqwnE.getNumberOfHolders.call({from: accounts[3]});
		const addressQg1SnOm = await MoshiachCoinStakings5hqwnE.transferAnyERC20Tokens.call(addressQgB60CA, addresscLWGGyS, uintB5AOmb, {from: accounts[2]});

		await expect(MoshiachCoinStakings5hqwnE.deposit.call(uintX8HlHMJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})