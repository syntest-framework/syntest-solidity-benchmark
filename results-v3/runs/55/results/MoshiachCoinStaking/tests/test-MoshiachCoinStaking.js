const MoshiachCoinStaking = artifacts.require("MoshiachCoinStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MoshiachCoinStaking', (accounts) => {
	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingbcWFL72 = await MoshiachCoinStaking.new({from: accounts[4]});
		const uintPADJ3gY = BigInt("759")
		const addressLpI3tD = accounts[0]
		const addressjEXKlXB = accounts[2]
		const uintqEalLJl = await MoshiachCoinStakingbcWFL72.withdraw.call(uintPADJ3gY, {from: accounts[4]});
		const uintWn22yfn = await MoshiachCoinStakingbcWFL72.getPendingDivs.call(addressLpI3tD, {from: accounts[0]});
		const uintB65NfSc = await MoshiachCoinStakingbcWFL72.getStakingAndDaoAmount.call({from: accounts[2]});
		const uintIDH5QVH = await MoshiachCoinStakingbcWFL72.getStakingAndDaoAmount.call({from: accounts[3]});
		const addressvcnRCIq = await MoshiachCoinStakingbcWFL72.transferOwnership.call(addressjEXKlXB, {from: accounts[4]});

		await expect(MoshiachCoinStakingbcWFL72.withdraw.call(uintPADJ3gY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingSmUwu9B = await MoshiachCoinStaking.new({from: accounts[1]});
		const uintDBKbbvx = BigInt("2011")
		const addressxqKcWPC = accounts[1]
		const addressKVkZetE = accounts[1]
		const uintY5MWVnr = await MoshiachCoinStakingSmUwu9B.getNumberOfHolders.call({from: accounts[4]});
		const uintp2MBNYB = await MoshiachCoinStakingSmUwu9B.deposit.call(uintDBKbbvx, {from: accounts[4]});
		const addresscD9jKGr = await MoshiachCoinStakingSmUwu9B.transferOwnership.call(addressxqKcWPC, {from: accounts[1]});
		const uintYMks69g = await MoshiachCoinStakingSmUwu9B.getStakingAndDaoAmount.call({from: accounts[2]});
		const addressYWXI8xT = await MoshiachCoinStakingSmUwu9B.transferOwnership.call(addressKVkZetE, {from: accounts[1]});

		assert.equal(uintY5MWVnr, BigInt("0"))
		await expect(MoshiachCoinStakingSmUwu9B.deposit.call(uintDBKbbvx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingwK3beSA = await MoshiachCoinStaking.new({from: accounts[0]});
		const addressV8z20rE = accounts[2]
		const addressw6VyJBM = accounts[2]
		const uintGdwEGka = BigInt("1159")
		const uintWWjce9g = await MoshiachCoinStakingwK3beSA.getPendingDivs.call(addressV8z20rE, {from: accounts[1]});
		const uintLDbR5Qo = await MoshiachCoinStakingwK3beSA.getPendingDivs.call(addressw6VyJBM, {from: accounts[0]});
		const uintXeCwp8Q = await MoshiachCoinStakingwK3beSA.deposit.call(uintGdwEGka, {from: accounts[4]});

		assert.equal(uintLDbR5Qo, BigInt("0"))
		assert.equal(uintWWjce9g, BigInt("0"))
		await expect(MoshiachCoinStakingwK3beSA.deposit.call(uintGdwEGka, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingNcQnq7R = await MoshiachCoinStaking.new({from: accounts[0]});
		const uintYSNAfwG = BigInt("233")
		const uintyFSlEh = await MoshiachCoinStakingNcQnq7R.getStakingAndDaoAmount.call({from: "0x0000000000000000000000000000000000000001"});
		const uintiRPtyzZ = await MoshiachCoinStakingNcQnq7R.getNumberOfHolders.call({from: accounts[0]});
		const uintlFttfG0 = await MoshiachCoinStakingNcQnq7R.deposit.call(uintYSNAfwG, {from: accounts[3]});
		const uintYmEfXy = await MoshiachCoinStakingNcQnq7R.getNumberOfHolders.call({from: accounts[4]});
		await MoshiachCoinStakingNcQnq7R.claimDivs.call({from: accounts[4]});

		assert.equal(uintiRPtyzZ, BigInt("0"))
		assert.equal(uintyFSlEh, BigInt("60000000000000000000000000"))
		await expect(MoshiachCoinStakingNcQnq7R.deposit.call(uintYSNAfwG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingScvnnO = await MoshiachCoinStaking.new({from: accounts[3]});
		await MoshiachCoinStakingScvnnO.onlyOwner.call({from: accounts[2]});
		await MoshiachCoinStakingScvnnO.claimDivs.call({from: accounts[0]});
		await MoshiachCoinStakingScvnnO.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(MoshiachCoinStakingScvnnO.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingjEtmc2y = await MoshiachCoinStaking.new({from: accounts[2]});
		const addresscUHIwuP = accounts[1]
		const uintse9oit5 = BigInt("1621")
		const uintj8oEnsp = BigInt("1297")
		const uintoc0eZca = BigInt("324")
		const uintSYMGuXN = BigInt("1133")
		const addressqnzBp6C = accounts[0]
		const address8DYjX7 = accounts[4]
		const uintx287zXX = await MoshiachCoinStakingjEtmc2y.getPendingDivs.call(addresscUHIwuP, {from: accounts[1]});
		await MoshiachCoinStakingjEtmc2y.claimDivs.call({from: accounts[1]});
		const uintGz2JQNm = await MoshiachCoinStakingjEtmc2y.withdraw.call(uintse9oit5, {from: "0x0000000000000000000000000000000000000001"});
		const uintiBSih3e = await MoshiachCoinStakingjEtmc2y.deposit.call(uintj8oEnsp, {from: accounts[4]});
		const uintz8zc6it = await MoshiachCoinStakingjEtmc2y.withdraw.call(uintoc0eZca, {from: accounts[2]});
		const uintMTR4Ulg = await MoshiachCoinStakingjEtmc2y.getNumberOfHolders.call({from: accounts[3]});
		const addressmSoprFj = await MoshiachCoinStakingjEtmc2y.transferAnyERC20Tokens.call(address8DYjX7, addressqnzBp6C, uintSYMGuXN, {from: accounts[4]});

		assert.equal(uintx287zXX, BigInt("0"))
		await expect(MoshiachCoinStakingjEtmc2y.claimDivs.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingjEtmc2y = await MoshiachCoinStaking.new({from: accounts[2]});
		const uintQvZL88 = BigInt("868")
		const addressGrEztc0 = accounts[4]
		const addresskhJloa0 = accounts[0]
		const addressq4Rgdo4 = accounts[1]
		const uintnettlqj = BigInt("1297")
		const addressJ804A88 = accounts[3]
		const uinte0NnbPR = BigInt("1133")
		const addressV5LOsTV = accounts[1]
		const addressdr4Nebq = accounts[4]
		const addressoggJ2YR = await MoshiachCoinStakingjEtmc2y.transferAnyERC20Tokens.call(addresskhJloa0, addressGrEztc0, uintQvZL88, {from: accounts[2]});
		const uintx287zXX = await MoshiachCoinStakingjEtmc2y.getPendingDivs.call(addressq4Rgdo4, {from: accounts[1]});
		const uintiBSih3e = await MoshiachCoinStakingjEtmc2y.deposit.call(uintnettlqj, {from: accounts[4]});
		const uintMTR4Ulg = await MoshiachCoinStakingjEtmc2y.getNumberOfHolders.call({from: accounts[3]});
		const addressuYvbdbP = await MoshiachCoinStakingjEtmc2y.transferOwnership.call(addressJ804A88, {from: accounts[2]});
		const addressmSoprFj = await MoshiachCoinStakingjEtmc2y.transferAnyERC20Tokens.call(addressdr4Nebq, addressV5LOsTV, uinte0NnbPR, {from: accounts[4]});

		await expect(MoshiachCoinStakingjEtmc2y.transferAnyERC20Tokens.call(addresskhJloa0, addressGrEztc0, uintQvZL88, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingjEtmc2y = await MoshiachCoinStaking.new({from: accounts[2]});
		const addressxUmu1Tu = accounts[1]
		const addressdh3oyhc = accounts[3]
		const uintogwsMz = BigInt("1133")
		const addressD4wgWeq = accounts[1]
		const addressorFlkjt = accounts[4]
		const uintx287zXX = await MoshiachCoinStakingjEtmc2y.getPendingDivs.call(addressxUmu1Tu, {from: accounts[1]});
		const uintMTR4Ulg = await MoshiachCoinStakingjEtmc2y.getNumberOfHolders.call({from: accounts[3]});
		const addressuYvbdbP = await MoshiachCoinStakingjEtmc2y.transferOwnership.call(addressdh3oyhc, {from: accounts[2]});
		const addressmSoprFj = await MoshiachCoinStakingjEtmc2y.transferAnyERC20Tokens.call(addressorFlkjt, addressD4wgWeq, uintogwsMz, {from: accounts[4]});

		assert.equal(uintMTR4Ulg, BigInt("0"))
		assert.equal(uintx287zXX, BigInt("0"))
		await expect(MoshiachCoinStakingjEtmc2y.transferAnyERC20Tokens.call(addressorFlkjt, addressD4wgWeq, uintogwsMz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingjVqooRF = await MoshiachCoinStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintYRqXnS1 = await MoshiachCoinStakingjVqooRF.getStakingAndDaoAmount.call({from: accounts[2]});
		const uintHHqM7C = await MoshiachCoinStakingjVqooRF.getNumberOfHolders.call({from: accounts[4]});
		const uintNa94rTi = await MoshiachCoinStakingjVqooRF.getNumberOfHolders.call({from: accounts[0]});
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingUlu6qzz = await MoshiachCoinStaking.new({from: accounts[5]});
		const uintx3K85kr = BigInt("0")
		const uintsBH2jop = BigInt("1153")
		const addressy3Z59eH = accounts[3]
		const addressU1Dzoy = accounts[5]
		await MoshiachCoinStakingUlu6qzz.claimDivs.call({from: accounts[2]});
		const uintdXMYE6S = await MoshiachCoinStakingUlu6qzz.deposit.call(uintx3K85kr, {from: "0x0000000000000000000000000000000000000001"});
		const uintbK4udeB = await MoshiachCoinStakingUlu6qzz.getStakingAndDaoAmount.call({from: accounts[3]});
		const addressSnF9ECE = await MoshiachCoinStakingUlu6qzz.transferAnyERC20Tokens.call(addressU1Dzoy, addressy3Z59eH, uintsBH2jop, {from: accounts[0]});
		await MoshiachCoinStakingUlu6qzz.claimDivs.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(MoshiachCoinStakingUlu6qzz.claimDivs.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingjEtmc2y = await MoshiachCoinStaking.new({from: accounts[2]});
		const uintXBFNNSa = BigInt("868")
		const addressChgwgQv = accounts[10]
		const addressn6xwTYX = accounts[0]
		const uintqRzkvn = BigInt("289")
		const addressg8MCQaG = accounts[0]
		const addressQBo5a0R = accounts[4]
		const addressrYH9MCe = accounts[4]
		const uintpH6EgRH = BigInt("460")
		const uintDgaYR19 = await MoshiachCoinStakingjEtmc2y.getStakingAndDaoAmount.call({from: accounts[1]});
		await MoshiachCoinStakingjEtmc2y.claimDivs.call({from: accounts[3]});
		await MoshiachCoinStakingjEtmc2y.claimDivs.call({from: accounts[5]});
		const uinta4OwuZa = await MoshiachCoinStakingjEtmc2y.getStakingAndDaoAmount.call({from: accounts[1]});
		await MoshiachCoinStakingjEtmc2y.claimDivs.call({from: accounts[2]});
		const addressoggJ2YR = await MoshiachCoinStakingjEtmc2y.transferAnyERC20Tokens.call(addressn6xwTYX, addressChgwgQv, uintXBFNNSa, {from: accounts[2]});
		const addresstytqQ9U = await MoshiachCoinStakingjEtmc2y.transferAnyERC20Tokens.call(addressQBo5a0R, addressg8MCQaG, uintqRzkvn, {from: accounts[4]});
		const addresssSU12yO = await MoshiachCoinStakingjEtmc2y.transferOwnership.call(addressrYH9MCe, {from: accounts[5]});
		const uintNtaBc9 = await MoshiachCoinStakingjEtmc2y.getNumberOfHolders.call({from: accounts[4]});
		const uintG4nVbyI = await MoshiachCoinStakingjEtmc2y.deposit.call(uintpH6EgRH, {from: accounts[4]});
		const uintE9a8cDf = await MoshiachCoinStakingjEtmc2y.getNumberOfHolders.call({from: accounts[4]});

		assert.equal(uintDgaYR19, BigInt("60000000000000000000000000"))
		await expect(MoshiachCoinStakingjEtmc2y.claimDivs.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})