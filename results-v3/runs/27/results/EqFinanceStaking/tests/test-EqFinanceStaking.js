const EqFinanceStaking = artifacts.require("EqFinanceStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EqFinanceStaking', (accounts) => {
	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingdUoWXTx = await EqFinanceStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintaDkijs6 = BigInt("1411")
		const addressrBtenYy = accounts[0]
		const addressO5j4hbg = accounts[3]
		const uintrs1hchA = BigInt("921")
		const addressfXdzqUp = accounts[4]
		const addressdUCX189 = accounts[4]
		const uintBpllmeF = await EqFinanceStakingdUoWXTx.getNumberOfHolders.call({from: accounts[0]});
		const uintCUs5aVF = await EqFinanceStakingdUoWXTx.getStakingAndDaoAmount.call({from: accounts[5]});
		const uintKI3w0q3 = await EqFinanceStakingdUoWXTx.getNumberOfHolders.call({from: accounts[1]});
		const addressS8vzzXy = await EqFinanceStakingdUoWXTx.transferAnyERC20Tokens.call(addressO5j4hbg, addressrBtenYy, uintaDkijs6, {from: accounts[2]});
		const addressTh5QJZC = await EqFinanceStakingdUoWXTx.transferAnyERC20Tokens.call(addressdUCX189, addressfXdzqUp, uintrs1hchA, {from: accounts[3]});
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingwmnWpyM = await EqFinanceStaking.new({from: accounts[2]});
		const addressv3Yxo9 = accounts[2]
		const addressHmiU52s = accounts[5]
		const uintbEdleK = BigInt("973")
		const addressFSdmzIy = accounts[3]
		const addressANyvD1j = accounts[0]
		const uintQJQic0O = await EqFinanceStakingwmnWpyM.getPendingDivs.call(addressv3Yxo9, {from: "0x0000000000000000000000000000000000000001"});
		const addresseU2vvTL = await EqFinanceStakingwmnWpyM.transferOwnership.call(addressHmiU52s, {from: accounts[4]});
		const addressNPucQqG = await EqFinanceStakingwmnWpyM.transferAnyERC20Tokens.call(addressANyvD1j, addressFSdmzIy, uintbEdleK, {from: accounts[1]});
		const uintpAEQQYK = await EqFinanceStakingwmnWpyM.getNumberOfHolders.call({from: accounts[0]});
		const uintHAmDUWo = await EqFinanceStakingwmnWpyM.getStakingAndDaoAmount.call({from: accounts[5]});

		assert.equal(uintQJQic0O, BigInt("0"))
		await expect(EqFinanceStakingwmnWpyM.transferOwnership.call(addressHmiU52s, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingDiZbzF9 = await EqFinanceStaking.new({from: accounts[2]});
		const addressOj1WMxp = accounts[2]
		const uintjUMf1rk = await EqFinanceStakingDiZbzF9.getPendingDivs.call(addressOj1WMxp, {from: accounts[1]});
		const uintDs2fuS2 = await EqFinanceStakingDiZbzF9.getStakingAndDaoAmount.call({from: accounts[3]});
		const uintzSZyJFU = await EqFinanceStakingDiZbzF9.getNumberOfHolders.call({from: accounts[4]});
		const uintnriVrvX = await EqFinanceStakingDiZbzF9.getNumberOfHolders.call({from: accounts[3]});
		await EqFinanceStakingDiZbzF9.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintDs2fuS2, BigInt("3000000000000000000000000"))
		assert.equal(uintjUMf1rk, BigInt("0"))
		assert.equal(uintnriVrvX, BigInt("0"))
		assert.equal(uintzSZyJFU, BigInt("0"))
		await expect(EqFinanceStakingDiZbzF9.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingh4UKafg = await EqFinanceStaking.new({from: accounts[1]});
		const uintZ81m8B = await EqFinanceStakingh4UKafg.getNumberOfHolders.call({from: accounts[4]});
		await EqFinanceStakingh4UKafg.claimDivs.call({from: accounts[3]});
		await EqFinanceStakingh4UKafg.claimDivs.call({from: accounts[1]});

		assert.equal(uintZ81m8B, BigInt("0"))
		await expect(EqFinanceStakingh4UKafg.claimDivs.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingNqUHPJx = await EqFinanceStaking.new({from: accounts[1]});
		const uintrmqhBx7 = BigInt("1339")
		const uintXrOuyZQ = BigInt("1540")
		const addressvcefGEf = accounts[3]
		const addressji7Eb0T = accounts[2]
		const uintBQhLHX = await EqFinanceStakingNqUHPJx.deposit.call(uintrmqhBx7, {from: accounts[2]});
		const addressgQcDTpQ = await EqFinanceStakingNqUHPJx.transferAnyERC20Tokens.call(addressji7Eb0T, addressvcefGEf, uintXrOuyZQ, {from: accounts[2]});
		await EqFinanceStakingNqUHPJx.claimDivs.call({from: accounts[0]});

		await expect(EqFinanceStakingNqUHPJx.deposit.call(uintrmqhBx7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingKPixLlo = await EqFinanceStaking.new({from: accounts[0]});
		const uintMZSyBVk = BigInt("465")
		const addressAmf2qtB = accounts[0]
		const addressS1NAi1X = accounts[3]
		const addressRyr0QNq = accounts[4]
		const uintkrP4RD8 = BigInt("1336")
		const addressQoC5cU = accounts[4]
		const addressV52auGR = accounts[1]
		const uintdxSvxon = await EqFinanceStakingKPixLlo.getNumberOfHolders.call({from: accounts[4]});
		const addressSnU9izQ = await EqFinanceStakingKPixLlo.transferAnyERC20Tokens.call(addressS1NAi1X, addressAmf2qtB, uintMZSyBVk, {from: accounts[0]});
		const uintiT4G67R = await EqFinanceStakingKPixLlo.getPendingDivs.call(addressRyr0QNq, {from: accounts[1]});
		const uintX0HaY0G = await EqFinanceStakingKPixLlo.getNumberOfHolders.call({from: "0x0000000000000000000000000000000000000001"});
		const uintd775id = await EqFinanceStakingKPixLlo.getStakingAndDaoAmount.call({from: accounts[4]});
		const addressjQePGH8 = await EqFinanceStakingKPixLlo.transferAnyERC20Tokens.call(addressV52auGR, addressQoC5cU, uintkrP4RD8, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintdxSvxon, BigInt("0"))
		await expect(EqFinanceStakingKPixLlo.transferAnyERC20Tokens.call(addressS1NAi1X, addressAmf2qtB, uintMZSyBVk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingNhsLnot = await EqFinanceStaking.new({from: accounts[4]});
		const uintrtR9AS2 = BigInt("357")
		const uintwi4Q3x = await EqFinanceStakingNhsLnot.getStakingAndDaoAmount.call({from: accounts[1]});
		await EqFinanceStakingNhsLnot.claimDivs.call({from: accounts[1]});
		const uintTd79psV = await EqFinanceStakingNhsLnot.getNumberOfHolders.call({from: accounts[0]});
		const uintqftSYDg = await EqFinanceStakingNhsLnot.withdraw.call(uintrtR9AS2, {from: accounts[3]});
		await EqFinanceStakingNhsLnot.claimDivs.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintwi4Q3x, BigInt("3000000000000000000000000"))
		await expect(EqFinanceStakingNhsLnot.claimDivs.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingNhsLnot = await EqFinanceStaking.new({from: accounts[4]});
		const addresshQPZpX = accounts[3]
		const uintwTbc972 = BigInt("427")
		const addressEXHg38C = accounts[0]
		const addressTX7V2XI = accounts[1]
		const addressBMdQZVh = await EqFinanceStakingNhsLnot.transferOwnership.call(addresshQPZpX, {from: accounts[4]});
		const uintwi4Q3x = await EqFinanceStakingNhsLnot.getStakingAndDaoAmount.call({from: accounts[1]});
		await EqFinanceStakingNhsLnot.claimDivs.call({from: accounts[1]});
		const uintTd79psV = await EqFinanceStakingNhsLnot.getNumberOfHolders.call({from: accounts[0]});
		await EqFinanceStakingNhsLnot.claimDivs.call({from: "0x0000000000000000000000000000000000000001"});
		const addressQm2aenx = await EqFinanceStakingNhsLnot.transferAnyERC20Tokens.call(addressTX7V2XI, addressEXHg38C, uintwTbc972, {from: accounts[3]});

		assert.equal(uintwi4Q3x, BigInt("3000000000000000000000000"))
		await expect(EqFinanceStakingNhsLnot.claimDivs.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingxe0B5LA = await EqFinanceStaking.new({from: accounts[3]});
		const uinteoGfhuQ = BigInt("0")
		const uintVL7BWiE = BigInt("1279")
		const uintYhGIeEg = await EqFinanceStakingxe0B5LA.deposit.call(uinteoGfhuQ, {from: accounts[0]});
		const uintcytRk42 = await EqFinanceStakingxe0B5LA.withdraw.call(uintVL7BWiE, {from: "0x0000000000000000000000000000000000000001"});
		const uintOk1auo5 = await EqFinanceStakingxe0B5LA.getStakingAndDaoAmount.call({from: accounts[1]});

		await expect(EqFinanceStakingxe0B5LA.deposit.call(uinteoGfhuQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingNhsLnot = await EqFinanceStaking.new({from: accounts[4]});
		const uintp7UxIRf = BigInt("0")
		const uintmsyAC3I = BigInt("738")
		const uintijqpX2g = BigInt("267")
		const uintnTQrxjl = BigInt("357")
		const uintxex1t6p = await EqFinanceStakingNhsLnot.getNumberOfHolders.call({from: accounts[4]});
		const uintPMPr0Bw = await EqFinanceStakingNhsLnot.getStakingAndDaoAmount.call({from: accounts[0]});
		const uintwi4Q3x = await EqFinanceStakingNhsLnot.getStakingAndDaoAmount.call({from: accounts[1]});
		await EqFinanceStakingNhsLnot.claimDivs.call({from: accounts[5]});
		const uintjxEpkh = await EqFinanceStakingNhsLnot.withdraw.call(uintp7UxIRf, {from: accounts[3]});
		const uintncR18eD = await EqFinanceStakingNhsLnot.deposit.call(uintmsyAC3I, {from: accounts[1]});
		await EqFinanceStakingNhsLnot.claimDivs.call({from: accounts[1]});
		const uintTd79psV = await EqFinanceStakingNhsLnot.getNumberOfHolders.call({from: accounts[0]});
		const uinthBhsqbz = await EqFinanceStakingNhsLnot.deposit.call(uintijqpX2g, {from: accounts[2]});
		const uintH35lTqT = await EqFinanceStakingNhsLnot.getStakingAndDaoAmount.call({from: accounts[2]});
		const uintqftSYDg = await EqFinanceStakingNhsLnot.withdraw.call(uintnTQrxjl, {from: accounts[3]});

		assert.equal(uintPMPr0Bw, BigInt("3000000000000000000000000"))
		assert.equal(uintwi4Q3x, BigInt("3000000000000000000000000"))
		assert.equal(uintxex1t6p, BigInt("0"))
		await expect(EqFinanceStakingNhsLnot.claimDivs.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});
})