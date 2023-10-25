const MoshiachCoinStaking = artifacts.require("MoshiachCoinStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MoshiachCoinStaking', (accounts) => {
	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakinghINrT6m = await MoshiachCoinStaking.new({from: accounts[5]});
		const addressiycIRzW = accounts[1]
		const uintkhLGrwZ = BigInt("243")
		const uintWUwVQwl = BigInt("941")
		const addressrQtznQR = accounts[0]
		const addressjkEZm2j = accounts[4]
		const uintgK8alTY = BigInt("1542")
//		await MoshiachCoinStakinghINrT6m.onlyOwner.call({from: accounts[3]});
//		const address5g39Y4 = await MoshiachCoinStakinghINrT6m.transferOwnership.call(addressiycIRzW, {from: accounts[4]});
//		const uintk8BJ4zI = await MoshiachCoinStakinghINrT6m.withdraw.call(uintkhLGrwZ, {from: accounts[3]});
//		const addressCx0xpt = await MoshiachCoinStakinghINrT6m.transferAnyERC20Tokens.call(addressjkEZm2j, addressrQtznQR, uintWUwVQwl, {from: accounts[3]});
//		const uintnn78Bq7 = await MoshiachCoinStakinghINrT6m.withdraw.call(uintgK8alTY, {from: accounts[1]});

		await expect(MoshiachCoinStakinghINrT6m.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingcdQuSWA = await MoshiachCoinStaking.new({from: accounts[4]});
		const addressCDSv6wA = accounts[5]
		const addresscC3qAsG = accounts[5]
//		const addressM0to65 = await MoshiachCoinStakingcdQuSWA.transferOwnership.call(addressCDSv6wA, {from: accounts[1]});
//		const uintRpgPtsa = await MoshiachCoinStakingcdQuSWA.getNumberOfHolders.call({from: accounts[3]});
//		const uintiShwVon = await MoshiachCoinStakingcdQuSWA.getPendingDivs.call(addresscC3qAsG, {from: accounts[4]});

		await expect(MoshiachCoinStakingcdQuSWA.transferOwnership.call(addressCDSv6wA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingbI4IknM = await MoshiachCoinStaking.new({from: accounts[2]});
		const addressp5Tfzhd = accounts[4]
		const uintwS2NnX = BigInt("785")
		const addressSLWQIhS = accounts[1]
		const addressxQegdZX = accounts[3]
		const addressdbRszdg = accounts[1]
		const uintf0z1a6A = await MoshiachCoinStakingbI4IknM.getPendingDivs.call(addressp5Tfzhd, {from: accounts[3]});
//		const addressNwR5vZa = await MoshiachCoinStakingbI4IknM.transferAnyERC20Tokens.call(addressxQegdZX, addressSLWQIhS, uintwS2NnX, {from: accounts[5]});
//		await MoshiachCoinStakingbI4IknM.claimDivs.call({from: accounts[0]});
//		await MoshiachCoinStakingbI4IknM.claimDivs.call({from: accounts[3]});
//		const addressTq2TVqA = await MoshiachCoinStakingbI4IknM.transferOwnership.call(addressdbRszdg, {from: accounts[3]});

		assert.equal(uintf0z1a6A, BigInt("0"))
		await expect(MoshiachCoinStakingbI4IknM.transferAnyERC20Tokens.call(addressxQegdZX, addressSLWQIhS, uintwS2NnX, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingOsROpww = await MoshiachCoinStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addresseO1nckq = accounts[0]
		const addressD79YLuB = accounts[4]
		const uintWM5mG5K = await MoshiachCoinStakingOsROpww.getNumberOfHolders.call({from: accounts[4]});
		await MoshiachCoinStakingOsROpww.claimDivs.call({from: "0x0000000000000000000000000000000000000001"});
		await MoshiachCoinStakingOsROpww.claimDivs.call({from: accounts[5]});
		const uintwtxBcn3 = await MoshiachCoinStakingOsROpww.getPendingDivs.call(addresseO1nckq, {from: accounts[5]});
		const uintXiBwfQL = await MoshiachCoinStakingOsROpww.getNumberOfHolders.call({from: accounts[3]});
		const uinta8XLDAJ = await MoshiachCoinStakingOsROpww.getPendingDivs.call(addressD79YLuB, {from: accounts[0]});
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingt86vP6G = await MoshiachCoinStaking.new({from: accounts[1]});
		const uintpL2SNC1 = BigInt("653")
//		await MoshiachCoinStakingt86vP6G.claimDivs.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintbbf2q8S = await MoshiachCoinStakingt86vP6G.deposit.call(uintpL2SNC1, {from: accounts[3]});

		await expect(MoshiachCoinStakingt86vP6G.claimDivs.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingh2qF0B2 = await MoshiachCoinStaking.new({from: accounts[4]});
		const addresswp6UWpn = accounts[0]
		const uint8Ygouh = await MoshiachCoinStakingh2qF0B2.getNumberOfHolders.call({from: accounts[4]});
		const uintn3P7Otz = await MoshiachCoinStakingh2qF0B2.getPendingDivs.call(addresswp6UWpn, {from: accounts[1]});
//		await MoshiachCoinStakingh2qF0B2.claimDivs.call({from: accounts[2]});
//		const uintfKE1h9j = await MoshiachCoinStakingh2qF0B2.getStakingAndDaoAmount.call({from: accounts[2]});

		assert.equal(uint8Ygouh, BigInt("0"))
		assert.equal(uintn3P7Otz, BigInt("0"))
		await expect(MoshiachCoinStakingh2qF0B2.claimDivs.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingVisHWkP = await MoshiachCoinStaking.new({from: accounts[0]});
		const uintNPQzQPG = BigInt("314")
//		await MoshiachCoinStakingVisHWkP.claimDivs.call({from: accounts[0]});
//		const uintXneQ1Ec = await MoshiachCoinStakingVisHWkP.getNumberOfHolders.call({from: accounts[3]});
//		const uintQzgyzua = await MoshiachCoinStakingVisHWkP.withdraw.call(uintNPQzQPG, {from: accounts[2]});

		await expect(MoshiachCoinStakingVisHWkP.claimDivs.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingh2qF0B2 = await MoshiachCoinStaking.new({from: accounts[4]});
		const addressWviYBi4 = accounts[0]
		const uintjKONqYi = BigInt("44")
		const addresswyury9Z = accounts[5]
		const addresslXOMmW2 = accounts[4]
		const uint8Ygouh = await MoshiachCoinStakingh2qF0B2.getNumberOfHolders.call({from: accounts[4]});
		const uintn3P7Otz = await MoshiachCoinStakingh2qF0B2.getPendingDivs.call(addressWviYBi4, {from: accounts[1]});
//		await MoshiachCoinStakingh2qF0B2.claimDivs.call({from: accounts[2]});
//		const addressP9PKwR = await MoshiachCoinStakingh2qF0B2.transferAnyERC20Tokens.call(addresslXOMmW2, addresswyury9Z, uintjKONqYi, {from: accounts[4]});
//		const uintfKE1h9j = await MoshiachCoinStakingh2qF0B2.getStakingAndDaoAmount.call({from: accounts[2]});

		assert.equal(uint8Ygouh, BigInt("0"))
		assert.equal(uintn3P7Otz, BigInt("0"))
		await expect(MoshiachCoinStakingh2qF0B2.claimDivs.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingh2qF0B2 = await MoshiachCoinStaking.new({from: accounts[4]});
		const addressrsABAdD = accounts[0]
		const addressRLDK1Cj = accounts[5]
		const uint8Ygouh = await MoshiachCoinStakingh2qF0B2.getNumberOfHolders.call({from: accounts[4]});
		const uintn3P7Otz = await MoshiachCoinStakingh2qF0B2.getPendingDivs.call(addressrsABAdD, {from: accounts[1]});
//		await MoshiachCoinStakingh2qF0B2.claimDivs.call({from: accounts[2]});
//		const addressuj8AWhR = await MoshiachCoinStakingh2qF0B2.transferOwnership.call(addressRLDK1Cj, {from: accounts[4]});
//		const uintfKE1h9j = await MoshiachCoinStakingh2qF0B2.getStakingAndDaoAmount.call({from: accounts[2]});

		assert.equal(uint8Ygouh, BigInt("0"))
		assert.equal(uintn3P7Otz, BigInt("0"))
		await expect(MoshiachCoinStakingh2qF0B2.claimDivs.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingt86vP6G = await MoshiachCoinStaking.new({from: accounts[1]});
		const uintG9NpDOB = BigInt("0")
//		const uinteFOzFXb = await MoshiachCoinStakingt86vP6G.deposit.call(uintG9NpDOB, {from: accounts[3]});

		await expect(MoshiachCoinStakingt86vP6G.deposit.call(uintG9NpDOB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})