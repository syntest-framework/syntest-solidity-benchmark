const EqFinanceStaking = artifacts.require("EqFinanceStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EqFinanceStaking', (accounts) => {
	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingiFNaeIP = await EqFinanceStaking.new({from: accounts[0]});
		const uintsOOGAay = BigInt("719")
		const uintF6Wu2yt = BigInt("1685")
		const addressf8JjqDm = accounts[1]
		const addressX1GZXWy = accounts[2]
//		await EqFinanceStakingiFNaeIP.claimDivs.call({from: accounts[2]});
//		const uintQPORai = await EqFinanceStakingiFNaeIP.deposit.call(uintsOOGAay, {from: accounts[0]});
//		const addressfAqeic6 = await EqFinanceStakingiFNaeIP.transferAnyERC20Tokens.call(addressX1GZXWy, addressf8JjqDm, uintF6Wu2yt, {from: "0x0000000000000000000000000000000000000001"});
//		const uinte8EyUYC = await EqFinanceStakingiFNaeIP.getNumberOfHolders.call({from: accounts[5]});

		await expect(EqFinanceStakingiFNaeIP.claimDivs.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingE4kYFp5 = await EqFinanceStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintk0oUn0E = await EqFinanceStakingE4kYFp5.getNumberOfHolders.call({from: accounts[2]});
		const uintPaQldjS = await EqFinanceStakingE4kYFp5.getStakingAndDaoAmount.call({from: accounts[2]});
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingSMMaEtZ = await EqFinanceStaking.new({from: accounts[0]});
		const addressTupG6i5 = accounts[4]
//		await EqFinanceStakingSMMaEtZ.claimDivs.call({from: accounts[2]});
//		const uintx4i1Qff = await EqFinanceStakingSMMaEtZ.getStakingAndDaoAmount.call({from: accounts[1]});
//		const uintNACVnOk = await EqFinanceStakingSMMaEtZ.getPendingDivs.call(addressTupG6i5, {from: accounts[2]});

		await expect(EqFinanceStakingSMMaEtZ.claimDivs.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakinghVLSwnQ = await EqFinanceStaking.new({from: accounts[2]});
		const addressqiDlhsp = accounts[2]
		const uintsiAm4cs = BigInt("1457")
		const addressHy5h95 = accounts[3]
		const uinta8SY6Ms = await EqFinanceStakinghVLSwnQ.getNumberOfHolders.call({from: accounts[0]});
		const uintSJAzo0 = await EqFinanceStakinghVLSwnQ.getPendingDivs.call(addressqiDlhsp, {from: accounts[2]});
//		const uintti9APmq = await EqFinanceStakinghVLSwnQ.deposit.call(uintsiAm4cs, {from: accounts[3]});
//		const addressfwmp6Ul = await EqFinanceStakinghVLSwnQ.transferOwnership.call(addressHy5h95, {from: accounts[5]});

		assert.equal(uintSJAzo0, BigInt("0"))
		assert.equal(uinta8SY6Ms, BigInt("0"))
		await expect(EqFinanceStakinghVLSwnQ.deposit.call(uintsiAm4cs, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingSMMaEtZ = await EqFinanceStaking.new({from: accounts[0]});
		const addressnQwyeQl = accounts[0]
		const addressbaNgNdc = accounts[4]
//		await EqFinanceStakingSMMaEtZ.onlyOwner.call({from: accounts[5]});
//		await EqFinanceStakingSMMaEtZ.claimDivs.call({from: accounts[2]});
//		await EqFinanceStakingSMMaEtZ.claimDivs.call({from: accounts[4]});
//		const uintyjPWFyL = await EqFinanceStakingSMMaEtZ.getPendingDivs.call(addressnQwyeQl, {from: accounts[2]});
//		const uintx4i1Qff = await EqFinanceStakingSMMaEtZ.getStakingAndDaoAmount.call({from: accounts[1]});
//		const uintNACVnOk = await EqFinanceStakingSMMaEtZ.getPendingDivs.call(addressbaNgNdc, {from: accounts[2]});

		await expect(EqFinanceStakingSMMaEtZ.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingSMMaEtZ = await EqFinanceStaking.new({from: accounts[0]});
		const uintkcVWHPN = BigInt("798")
		const addressrIPpWf = accounts[4]
//		await EqFinanceStakingSMMaEtZ.claimDivs.call({from: accounts[2]});
//		const uintYlK1m1d = await EqFinanceStakingSMMaEtZ.withdraw.call(uintkcVWHPN, {from: accounts[2]});
//		const uintx4i1Qff = await EqFinanceStakingSMMaEtZ.getStakingAndDaoAmount.call({from: accounts[1]});
//		const uintNACVnOk = await EqFinanceStakingSMMaEtZ.getPendingDivs.call(addressrIPpWf, {from: accounts[2]});

		await expect(EqFinanceStakingSMMaEtZ.claimDivs.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingSMMaEtZ = await EqFinanceStaking.new({from: accounts[0]});
		const uintCVYNS4N = BigInt("1087")
		const addressXrAeXrR = accounts[3]
		const addresskAD8T00 = accounts[2]
//		await EqFinanceStakingSMMaEtZ.claimDivs.call({from: accounts[2]});
//		const addressseVnv38 = await EqFinanceStakingSMMaEtZ.transferAnyERC20Tokens.call(addresskAD8T00, addressXrAeXrR, uintCVYNS4N, {from: accounts[0]});

		await expect(EqFinanceStakingSMMaEtZ.claimDivs.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingI5QGNvG = await EqFinanceStaking.new({from: accounts[2]});
		const addresswfgVG7f = accounts[1]
		const uint8ctuYp = BigInt("1188")
		const addressbWpRC2i = accounts[4]
		const addressgJQfy15 = await EqFinanceStakingI5QGNvG.transferOwnership.call(addresswfgVG7f, {from: accounts[2]});
		const uintpJlNTgN = await EqFinanceStakingI5QGNvG.getStakingAndDaoAmount.call({from: accounts[2]});
//		await EqFinanceStakingI5QGNvG.claimDivs.call({from: accounts[4]});
//		const uintFDYIJGk = await EqFinanceStakingI5QGNvG.withdraw.call(uint8ctuYp, {from: accounts[4]});
//		const addressZF1tdg = await EqFinanceStakingI5QGNvG.transferOwnership.call(addressbWpRC2i, {from: accounts[2]});

		assert.equal(uintpJlNTgN, BigInt("3000000000000000000000000"))
		await expect(EqFinanceStakingI5QGNvG.claimDivs.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})