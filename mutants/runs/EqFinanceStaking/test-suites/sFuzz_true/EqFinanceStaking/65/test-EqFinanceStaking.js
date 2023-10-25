const EqFinanceStaking = artifacts.require("EqFinanceStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EqFinanceStaking', (accounts) => {
	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakinghMWaE5s = await EqFinanceStaking.new({from: accounts[0]});
		const uintEtBUGrO = BigInt("546")
		const uintMTIyCsA = BigInt("286")
		await EqFinanceStakinghMWaE5s.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uintVFcZ9Md = await EqFinanceStakinghMWaE5s.withdraw.call(uintEtBUGrO, {from: accounts[4]});
		const uintntmqCZX = await EqFinanceStakinghMWaE5s.deposit.call(uintMTIyCsA, {from: accounts[2]});

		await expect(EqFinanceStakinghMWaE5s.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingAuOiFdr = await EqFinanceStaking.new({from: accounts[4]});
		const addresszHF8xkU = accounts[1]
		const uinti00Li45 = await EqFinanceStakingAuOiFdr.getNumberOfHolders.call({from: accounts[2]});
		const uintT48GATa = await EqFinanceStakingAuOiFdr.getPendingDivs.call(addresszHF8xkU, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintT48GATa, BigInt("0"))
		assert.equal(uinti00Li45, BigInt("0"))
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStaking35Rj29 = await EqFinanceStaking.new({from: accounts[4]});
		const addressuLM8Mqy = accounts[4]
		const address2NRMqR = accounts[3]
		const uintqGWo5eV = await EqFinanceStaking35Rj29.getPendingDivs.call(addressuLM8Mqy, {from: accounts[4]});
		const uintmWxUYxw = await EqFinanceStaking35Rj29.getPendingDivs.call(address2NRMqR, {from: accounts[1]});
		const uintt5rpm27 = await EqFinanceStaking35Rj29.getStakingAndDaoAmount.call({from: accounts[3]});

		assert.equal(uintmWxUYxw, BigInt("0"))
		assert.equal(uintqGWo5eV, BigInt("0"))
		assert.equal(uintt5rpm27, BigInt("3000000000000000000000000"))
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingiQc5bnD = await EqFinanceStaking.new({from: accounts[0]});
		const addressLMOouE0 = accounts[4]
		const addressM8iUMm4 = accounts[1]
		const uintrMuwjbg = BigInt("1541")
		const addressIcdxsv8 = await EqFinanceStakingiQc5bnD.transferOwnership.call(addressLMOouE0, {from: accounts[1]});
		const uintMqqaLEl = await EqFinanceStakingiQc5bnD.getNumberOfHolders.call({from: accounts[0]});
		const uintau3cWkB = await EqFinanceStakingiQc5bnD.getPendingDivs.call(addressM8iUMm4, {from: accounts[0]});
		const uintxF0G4mD = await EqFinanceStakingiQc5bnD.getStakingAndDaoAmount.call({from: accounts[4]});
		const uintXtAmaGA = await EqFinanceStakingiQc5bnD.withdraw.call(uintrMuwjbg, {from: accounts[4]});
		await EqFinanceStakingiQc5bnD.claimDivs.call({from: accounts[3]});

		await expect(EqFinanceStakingiQc5bnD.transferOwnership.call(addressLMOouE0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakinglJPzcso = await EqFinanceStaking.new({from: accounts[1]});
		const uintpMVHmJ = BigInt("1071")
		const addressva4XHrp = accounts[2]
		const uintJcDGN5X = BigInt("1938")
		const uintD1gtped = await EqFinanceStakinglJPzcso.deposit.call(uintpMVHmJ, {from: accounts[0]});
		const uintc5PvKhA = await EqFinanceStakinglJPzcso.getPendingDivs.call(addressva4XHrp, {from: accounts[2]});
		const uintyMMNZDi = await EqFinanceStakinglJPzcso.deposit.call(uintJcDGN5X, {from: accounts[5]});

		await expect(EqFinanceStakinglJPzcso.deposit.call(uintpMVHmJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingqWevCQk = await EqFinanceStaking.new({from: accounts[1]});
		const uintHFnigV = BigInt("1904")
		const addressOJqc9eT = accounts[0]
		await EqFinanceStakingqWevCQk.claimDivs.call({from: accounts[2]});
		const uintW6X896 = await EqFinanceStakingqWevCQk.deposit.call(uintHFnigV, {from: accounts[4]});
		const addressH0mXiV7 = await EqFinanceStakingqWevCQk.transferOwnership.call(addressOJqc9eT, {from: accounts[5]});

		await expect(EqFinanceStakingqWevCQk.claimDivs.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingJF0qY92 = await EqFinanceStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintLlA1oHN = BigInt("1372")
		const addressjGwtPlS = accounts[3]
		const addressEoDOfwZ = accounts[1]
		const addressNLKD9H = accounts[0]
		await EqFinanceStakingJF0qY92.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const addressozI259C = await EqFinanceStakingJF0qY92.transferAnyERC20Tokens.call(addressEoDOfwZ, addressjGwtPlS, uintLlA1oHN, {from: accounts[3]});
		const uintqWQK8Xk = await EqFinanceStakingJF0qY92.getPendingDivs.call(addressNLKD9H, {from: accounts[2]});
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingAuOiFdr = await EqFinanceStaking.new({from: accounts[4]});
		const addressyr6cANa = accounts[1]
		const addressZFAlKTH = accounts[5]
		const uinti00Li45 = await EqFinanceStakingAuOiFdr.getNumberOfHolders.call({from: accounts[2]});
		const uintT48GATa = await EqFinanceStakingAuOiFdr.getPendingDivs.call(addressyr6cANa, {from: "0x0000000000000000000000000000000000000001"});
		const address5gk0KQ = await EqFinanceStakingAuOiFdr.transferOwnership.call(addressZFAlKTH, {from: accounts[4]});
		const uintOGSUb7g = await EqFinanceStakingAuOiFdr.getNumberOfHolders.call({from: accounts[1]});

		assert.equal(uintOGSUb7g, BigInt("0"))
		assert.equal(uintT48GATa, BigInt("0"))
		assert.equal(uinti00Li45, BigInt("0"))
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingAuOiFdr = await EqFinanceStaking.new({from: accounts[4]});
		const addressethnFi2 = accounts[4]
		const uintRrs2p7B = BigInt("1755")
		const addressuXibC4 = accounts[1]
		const uintqAg73KT = BigInt("790")
		const uintnCMtwd9 = await EqFinanceStakingAuOiFdr.getPendingDivs.call(addressethnFi2, {from: accounts[1]});
		const uinti00Li45 = await EqFinanceStakingAuOiFdr.getNumberOfHolders.call({from: accounts[2]});
		const uintx86CM0 = await EqFinanceStakingAuOiFdr.withdraw.call(uintRrs2p7B, {from: accounts[3]});
		const uintT48GATa = await EqFinanceStakingAuOiFdr.getPendingDivs.call(addressuXibC4, {from: "0x0000000000000000000000000000000000000001"});
		const uintPl5YErQ = await EqFinanceStakingAuOiFdr.deposit.call(uintqAg73KT, {from: accounts[0]});

		assert.equal(uinti00Li45, BigInt("0"))
		assert.equal(uintnCMtwd9, BigInt("0"))
		await expect(EqFinanceStakingAuOiFdr.withdraw.call(uintRrs2p7B, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingcyAN4tC = await EqFinanceStaking.new({from: accounts[3]});
		const address3NXyYw = accounts[1]
		const uintMRhnqW = BigInt("400")
		const addressK1wumlY = accounts[4]
		const addresskPXNXZb = accounts[1]
		const uintdOzAZ2j = await EqFinanceStakingcyAN4tC.getPendingDivs.call(address3NXyYw, {from: accounts[2]});
		const addressq7IFg1d = await EqFinanceStakingcyAN4tC.transferAnyERC20Tokens.call(addresskPXNXZb, addressK1wumlY, uintMRhnqW, {from: accounts[3]});

		assert.equal(uintdOzAZ2j, BigInt("0"))
		await expect(EqFinanceStakingcyAN4tC.transferAnyERC20Tokens.call(addresskPXNXZb, addressK1wumlY, uintMRhnqW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingkyXCp8O = await EqFinanceStaking.new({from: accounts[3]});
		const uintljZQLNB = BigInt("0")
		const addresslpvoC84 = accounts[4]
		const uintv5jvNqa = BigInt("1902")
		const addressUQov2e = accounts[1]
		const uintrfnvvE9 = await EqFinanceStakingkyXCp8O.deposit.call(uintljZQLNB, {from: accounts[2]});
		const addressvWiWLAk = await EqFinanceStakingkyXCp8O.transferOwnership.call(addresslpvoC84, {from: accounts[2]});
		const uintPLYDwY3 = await EqFinanceStakingkyXCp8O.deposit.call(uintv5jvNqa, {from: accounts[3]});
		await EqFinanceStakingkyXCp8O.claimDivs.call({from: accounts[5]});
		const uintI2JHKOw = await EqFinanceStakingkyXCp8O.getPendingDivs.call(addressUQov2e, {from: accounts[2]});
		const uint3OYds8 = await EqFinanceStakingkyXCp8O.getStakingAndDaoAmount.call({from: accounts[4]});

		await expect(EqFinanceStakingkyXCp8O.deposit.call(uintljZQLNB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})