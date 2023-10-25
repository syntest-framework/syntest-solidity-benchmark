const FrogDAOGovernanceRewards = artifacts.require("FrogDAOGovernanceRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAOGovernanceRewards', (accounts) => {
	it('test for FrogDAOGovernanceRewards', async () => {
		const addressw7ccTbE = accounts[1]
		const FrogDAOGovernanceRewardsz0AM5lp = await FrogDAOGovernanceRewards.new(addressw7ccTbE, {from: accounts[0]});
		const addressADWD5ks = accounts[4]
		const uintutaqNCd = BigInt("1914")
//		await FrogDAOGovernanceRewardsz0AM5lp.checkhalve.call({from: accounts[1]});
//		const uint256Q5q4DDR = await FrogDAOGovernanceRewardsz0AM5lp.earned.call(addressADWD5ks, {from: accounts[1]});
//		const uint256lAAbaZs = await FrogDAOGovernanceRewardsz0AM5lp.stake.call(uintutaqNCd, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FrogDAOGovernanceRewardsz0AM5lp.checkhalve.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressgTqY3N = accounts[4]
		const FrogDAOGovernanceRewardsVCVxXEV = await FrogDAOGovernanceRewards.new(addressgTqY3N, {from: accounts[2]});
		const uintjh3iRoB = BigInt("1111")
		const addressCtpellx = accounts[2]
		const addressxUY6WZb = accounts[5]
//		const uint256E1Q4483 = await FrogDAOGovernanceRewardsVCVxXEV.notifyRewardAmount.call(uintjh3iRoB, {from: accounts[2]});
//		await FrogDAOGovernanceRewardsVCVxXEV.getReward.call({from: accounts[4]});
//		const uint256calsk8z = await FrogDAOGovernanceRewardsVCVxXEV.earned.call(addressCtpellx, {from: accounts[2]});
//		const addressmOFsbUc = await FrogDAOGovernanceRewardsVCVxXEV.transferDevAddr.call(addressxUY6WZb, {from: accounts[2]});

		await expect(FrogDAOGovernanceRewardsVCVxXEV.notifyRewardAmount.call(uintjh3iRoB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressLLeeoef = accounts[4]
		const FrogDAOGovernanceRewardsjBp3O8Y = await FrogDAOGovernanceRewards.new(addressLLeeoef, {from: accounts[0]});
		const uintznfqKoP = BigInt("1863")
		const uintVcNruyv = BigInt("1173")
//		const uint256cGeOWHC = await FrogDAOGovernanceRewardsjBp3O8Y.stake.call(uintznfqKoP, {from: accounts[0]});
//		const uint256uhtA3s = await FrogDAOGovernanceRewardsjBp3O8Y.lastTimeRewardApplicable.call({from: accounts[2]});
//		const uint256QfKLrJC = await FrogDAOGovernanceRewardsjBp3O8Y.withdrawDevFund.call(uintVcNruyv, {from: accounts[4]});
//		await FrogDAOGovernanceRewardsjBp3O8Y.checkhalve.call({from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsjBp3O8Y.stake.call(uintznfqKoP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressKJpQmfR = accounts[4]
		const FrogDAOGovernanceRewardsi4RBEgo = await FrogDAOGovernanceRewards.new(addressKJpQmfR, {from: accounts[4]});
		const uintVU2JpxJ = BigInt("1754")
		const uint256enomM8 = await FrogDAOGovernanceRewardsi4RBEgo.lastTimeRewardApplicable.call({from: accounts[2]});
//		const uint256GIgd4WY = await FrogDAOGovernanceRewardsi4RBEgo.withdraw.call(uintVU2JpxJ, {from: accounts[0]});

		assert.equal(uint256enomM8, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsi4RBEgo.withdraw.call(uintVU2JpxJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressHB1Omzp = accounts[4]
		const FrogDAOGovernanceRewardsi4RBEgo = await FrogDAOGovernanceRewards.new(addressHB1Omzp, {from: accounts[4]});
		const uintjQSvv8H = BigInt("1754")
		const uint256enomM8 = await FrogDAOGovernanceRewardsi4RBEgo.lastTimeRewardApplicable.call({from: accounts[2]});
//		await FrogDAOGovernanceRewardsi4RBEgo.renounceDevAddr.call({from: accounts[2]});
//		const uint256GIgd4WY = await FrogDAOGovernanceRewardsi4RBEgo.withdraw.call(uintjQSvv8H, {from: accounts[0]});

		assert.equal(uint256enomM8, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsi4RBEgo.renounceDevAddr.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressVPproF = accounts[1]
		const FrogDAOGovernanceRewardsleJ3b2o = await FrogDAOGovernanceRewards.new(addressVPproF, {from: accounts[4]});
//		await FrogDAOGovernanceRewardsleJ3b2o.exit.call({from: accounts[2]});

		await expect(FrogDAOGovernanceRewardsleJ3b2o.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressVlBigEw = accounts[1]
		const FrogDAOGovernanceRewardsleJ3b2o = await FrogDAOGovernanceRewards.new(addressVlBigEw, {from: accounts[4]});
		const uintrWnXfW1 = BigInt("177")
//		const uint256NgYUQb9 = await FrogDAOGovernanceRewardsleJ3b2o.withdrawDevFund.call(uintrWnXfW1, {from: accounts[1]});
//		await FrogDAOGovernanceRewardsleJ3b2o.exit.call({from: accounts[5]});
//		await FrogDAOGovernanceRewardsleJ3b2o.checkhalve.call({from: accounts[1]});
//		await FrogDAOGovernanceRewardsleJ3b2o.exit.call({from: accounts[2]});

		await expect(FrogDAOGovernanceRewardsleJ3b2o.withdrawDevFund.call(uintrWnXfW1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressmm74C8I = accounts[0]
		const FrogDAOGovernanceRewardsDppsa1 = await FrogDAOGovernanceRewards.new(addressmm74C8I, {from: "0x0000000000000000000000000000000000000001"});
		const uintw4NEimf = BigInt("1817")
		const addresse0p6Cra = accounts[3]
		const uint256S5cA94P = await FrogDAOGovernanceRewardsDppsa1.notifyRewardAmount.call(uintw4NEimf, {from: accounts[3]});
		await FrogDAOGovernanceRewardsDppsa1.checkStart.call({from: accounts[0]});
		const uint256S2TMayG = await FrogDAOGovernanceRewardsDppsa1.earned.call(addresse0p6Cra, {from: accounts[3]});
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressAHjN0Do = accounts[1]
		const FrogDAOGovernanceRewardsleJ3b2o = await FrogDAOGovernanceRewards.new(addressAHjN0Do, {from: accounts[4]});
		const addressAYM6o5u = accounts[3]
		const addressxEVaZHV = await FrogDAOGovernanceRewardsleJ3b2o.transferDevAddr.call(addressAYM6o5u, {from: accounts[1]});
//		await FrogDAOGovernanceRewardsleJ3b2o.exit.call({from: accounts[2]});

		await expect(FrogDAOGovernanceRewardsleJ3b2o.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressb7SlnOg = accounts[1]
		const FrogDAOGovernanceRewardsleJ3b2o = await FrogDAOGovernanceRewards.new(addressb7SlnOg, {from: accounts[4]});
		const uintE7i9TAD = BigInt("1913")
//		const uint256y3dIfM = await FrogDAOGovernanceRewardsleJ3b2o.notifyRewardAmount.call(uintE7i9TAD, {from: accounts[2]});
//		await FrogDAOGovernanceRewardsleJ3b2o.exit.call({from: accounts[2]});

		await expect(FrogDAOGovernanceRewardsleJ3b2o.notifyRewardAmount.call(uintE7i9TAD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})