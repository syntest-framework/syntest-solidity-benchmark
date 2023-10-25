const MoshiachCoinStaking = artifacts.require("MoshiachCoinStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MoshiachCoinStaking', (accounts) => {
	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingtg6uBdN = await MoshiachCoinStaking.new({from: accounts[3]});
		const uintkhNUmy8 = BigInt("687")
		const addressWbiMKvh = accounts[4]
		const uintdNn8G4q = BigInt("1500")
		const addressHulGL4T = accounts[3]
		const addressOHprkxu = "0x0000000000000000000000000000000000000001"
//		const uintLnGvKh = await MoshiachCoinStakingtg6uBdN.withdraw.call(uintkhNUmy8, {from: accounts[0]});
//		const uinth8RrnCk = await MoshiachCoinStakingtg6uBdN.getStakingAndDaoAmount.call({from: accounts[3]});
//		const addresskPuCvxz = await MoshiachCoinStakingtg6uBdN.transferOwnership.call(addressWbiMKvh, {from: accounts[0]});
//		const addressve6diYu = await MoshiachCoinStakingtg6uBdN.transferAnyERC20Tokens.call(addressOHprkxu, addressHulGL4T, uintdNn8G4q, {from: accounts[4]});

		await expect(MoshiachCoinStakingtg6uBdN.withdraw.call(uintkhNUmy8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingDfLRI2T = await MoshiachCoinStaking.new({from: accounts[2]});
		const uintN5GqDx = BigInt("123")
		const addressLzIHF1o = accounts[4]
		const addressxcp6Lgx = accounts[2]
		const addressqRXXNO6 = accounts[5]
		const uintXzIVcj = BigInt("1726")
		const uintyIhtfW = BigInt("349")
//		const addresstCpHGov = await MoshiachCoinStakingDfLRI2T.transferAnyERC20Tokens.call(addressxcp6Lgx, addressLzIHF1o, uintN5GqDx, {from: accounts[3]});
//		const addressUgaFWVB = await MoshiachCoinStakingDfLRI2T.transferOwnership.call(addressqRXXNO6, {from: accounts[2]});
//		await MoshiachCoinStakingDfLRI2T.onlyOwner.call({from: accounts[1]});
//		const uintD4WIaS2 = await MoshiachCoinStakingDfLRI2T.deposit.call(uintXzIVcj, {from: accounts[1]});
//		const uintX6LjOLm = await MoshiachCoinStakingDfLRI2T.deposit.call(uintyIhtfW, {from: accounts[0]});

		await expect(MoshiachCoinStakingDfLRI2T.transferAnyERC20Tokens.call(addressxcp6Lgx, addressLzIHF1o, uintN5GqDx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingkZtDU5Z = await MoshiachCoinStaking.new({from: accounts[3]});
		const addresswpgttAp = accounts[2]
		const addressyZ5DZJ = "0x0000000000000000000000000000000000000001"
		const uintu1f8V82 = await MoshiachCoinStakingkZtDU5Z.getStakingAndDaoAmount.call({from: accounts[0]});
//		const addressreH7a4s = await MoshiachCoinStakingkZtDU5Z.transferOwnership.call(addresswpgttAp, {from: accounts[2]});
//		const uinttPGKonI = await MoshiachCoinStakingkZtDU5Z.getPendingDivs.call(addressyZ5DZJ, {from: accounts[4]});
//		await MoshiachCoinStakingkZtDU5Z.onlyOwner.call({from: accounts[3]});

		assert.equal(uintu1f8V82, BigInt("60000000000000000000000000"))
		await expect(MoshiachCoinStakingkZtDU5Z.transferOwnership.call(addresswpgttAp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStaking8Yihe4 = await MoshiachCoinStaking.new({from: accounts[2]});
//		await MoshiachCoinStaking8Yihe4.claimDivs.call({from: accounts[2]});
//		const uintTSPF1g5 = await MoshiachCoinStaking8Yihe4.getNumberOfHolders.call({from: accounts[2]});
//		const uintoTonOuK = await MoshiachCoinStaking8Yihe4.getNumberOfHolders.call({from: accounts[2]});

		await expect(MoshiachCoinStaking8Yihe4.claimDivs.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingYFy78VS = await MoshiachCoinStaking.new({from: accounts[0]});
		const uintYYuvgzK = BigInt("487")
		const addressAhFovYT = accounts[3]
		const addressseMbXBB = accounts[2]
		const addressibrDnDu = "0x0000000000000000000000000000000000000001"
		const uintmT4rsTn = await MoshiachCoinStakingYFy78VS.getNumberOfHolders.call({from: accounts[2]});
//		const uintTd2vjl7 = await MoshiachCoinStakingYFy78VS.deposit.call(uintYYuvgzK, {from: accounts[0]});
//		const uintUoLzWol = await MoshiachCoinStakingYFy78VS.getPendingDivs.call(addressAhFovYT, {from: accounts[4]});
//		const uintO0UvZDd = await MoshiachCoinStakingYFy78VS.getNumberOfHolders.call({from: accounts[5]});
//		const addressLlxhfX5 = await MoshiachCoinStakingYFy78VS.transferOwnership.call(addressseMbXBB, {from: accounts[5]});
//		const uintA7u6c55 = await MoshiachCoinStakingYFy78VS.getPendingDivs.call(addressibrDnDu, {from: accounts[2]});

		assert.equal(uintmT4rsTn, BigInt("0"))
		await expect(MoshiachCoinStakingYFy78VS.deposit.call(uintYYuvgzK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakinglETWIR = await MoshiachCoinStaking.new({from: accounts[4]});
		const addressFd7psRd = accounts[1]
		const uintewyQe3e = BigInt("1674")
		const uintG7cz0i3 = BigInt("772")
		const uintivELbc = BigInt("130")
		const addresslIntHA = await MoshiachCoinStakinglETWIR.transferOwnership.call(addressFd7psRd, {from: accounts[4]});
//		const uintuVeSDlT = await MoshiachCoinStakinglETWIR.withdraw.call(uintewyQe3e, {from: accounts[2]});
//		const uintK8j7BzV = await MoshiachCoinStakinglETWIR.withdraw.call(uintG7cz0i3, {from: accounts[0]});
//		const uintRHrCRd4 = await MoshiachCoinStakinglETWIR.withdraw.call(uintivELbc, {from: accounts[3]});

		await expect(MoshiachCoinStakinglETWIR.withdraw.call(uintewyQe3e, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStaking8Yihe4 = await MoshiachCoinStaking.new({from: accounts[2]});
//		await MoshiachCoinStaking8Yihe4.claimDivs.call({from: accounts[2]});
//		const uintTSPF1g5 = await MoshiachCoinStaking8Yihe4.getNumberOfHolders.call({from: accounts[2]});
//		await MoshiachCoinStaking8Yihe4.onlyOwner.call({from: accounts[3]});
//		const uintoTonOuK = await MoshiachCoinStaking8Yihe4.getNumberOfHolders.call({from: accounts[2]});

		await expect(MoshiachCoinStaking8Yihe4.claimDivs.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStaking8Yihe4 = await MoshiachCoinStaking.new({from: accounts[2]});
		const uintS8OPMut = BigInt("643")
		const addressrCGe28E = accounts[1]
		const addressBZP2Lhn = accounts[3]
//		const addressS4JiJS = await MoshiachCoinStaking8Yihe4.transferAnyERC20Tokens.call(addressBZP2Lhn, addressrCGe28E, uintS8OPMut, {from: accounts[2]});
//		await MoshiachCoinStaking8Yihe4.claimDivs.call({from: accounts[2]});

		await expect(MoshiachCoinStaking8Yihe4.transferAnyERC20Tokens.call(addressBZP2Lhn, addressrCGe28E, uintS8OPMut, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingesgcPYD = await MoshiachCoinStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addresslgWFztN = accounts[0]
		const uintzRXXPju = BigInt("1531")
		const addressbgEzKqy = accounts[5]
		const uintxI34Zzq = BigInt("1572")
		const uintkDdmOMd = BigInt("153")
		const addressexc2IiO = accounts[4]
		const addressfivGYS = await MoshiachCoinStakingesgcPYD.transferOwnership.call(addresslgWFztN, {from: accounts[1]});
		const uintT9BDqak = await MoshiachCoinStakingesgcPYD.deposit.call(uintzRXXPju, {from: accounts[0]});
		const addresscKNFjij = await MoshiachCoinStakingesgcPYD.transferOwnership.call(addressbgEzKqy, {from: accounts[2]});
		const uintjROfbEL = await MoshiachCoinStakingesgcPYD.deposit.call(uintxI34Zzq, {from: accounts[5]});
		const uintsFFfLc8 = await MoshiachCoinStakingesgcPYD.withdraw.call(uintkDdmOMd, {from: "0x0000000000000000000000000000000000000001"});
		const addressgXLfpP = await MoshiachCoinStakingesgcPYD.transferOwnership.call(addressexc2IiO, {from: accounts[4]});
	});
})