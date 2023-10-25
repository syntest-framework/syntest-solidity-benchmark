const EqFinanceStaking = artifacts.require("EqFinanceStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EqFinanceStaking', (accounts) => {
	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingug9OmiY = await EqFinanceStaking.new({from: accounts[3]});
		const uintJ3QXyin = BigInt("1146")
		const uintmRuutoU = BigInt("1265")
//		const uintjei5CM0 = await EqFinanceStakingug9OmiY.withdraw.call(uintJ3QXyin, {from: "0x0000000000000000000000000000000000000001"});
//		await EqFinanceStakingug9OmiY.onlyOwner.call({from: accounts[2]});
//		const uintVqyRdWf = await EqFinanceStakingug9OmiY.withdraw.call(uintmRuutoU, {from: "0x0000000000000000000000000000000000000001"});

		await expect(EqFinanceStakingug9OmiY.withdraw.call(uintJ3QXyin, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingL4Dp4ts = await EqFinanceStaking.new({from: accounts[2]});
		const uintElRsd0 = BigInt("300")
		const addressAlllkiu = accounts[2]
//		const uintxxB5y8c = await EqFinanceStakingL4Dp4ts.deposit.call(uintElRsd0, {from: accounts[5]});
//		const uintk53pVDB = await EqFinanceStakingL4Dp4ts.getPendingDivs.call(addressAlllkiu, {from: accounts[1]});
//		const uintjVI5jrk = await EqFinanceStakingL4Dp4ts.getNumberOfHolders.call({from: accounts[2]});
//		const uintWGfMLYH = await EqFinanceStakingL4Dp4ts.getStakingAndDaoAmount.call({from: accounts[4]});
//		const uintmZyKLw0 = await EqFinanceStakingL4Dp4ts.getNumberOfHolders.call({from: accounts[3]});

		await expect(EqFinanceStakingL4Dp4ts.deposit.call(uintElRsd0, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStaking7x0KR4 = await EqFinanceStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintgJO8aDJ = BigInt("1833")
		const uinteMmhs5i = BigInt("1800")
		const addressYlqSNm = accounts[0]
		const addressBm79k1r = accounts[0]
		await EqFinanceStaking7x0KR4.claimDivs.call({from: accounts[1]});
		const uintqSX5KvA = await EqFinanceStaking7x0KR4.deposit.call(uintgJO8aDJ, {from: accounts[0]});
		await EqFinanceStaking7x0KR4.claimDivs.call({from: accounts[2]});
		const addressGumvUQJ = await EqFinanceStaking7x0KR4.transferAnyERC20Tokens.call(addressBm79k1r, addressYlqSNm, uinteMmhs5i, {from: accounts[1]});
		await EqFinanceStaking7x0KR4.onlyOwner.call({from: accounts[5]});
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingjoCJD3P = await EqFinanceStaking.new({from: accounts[3]});
		const addressxHWu817 = accounts[3]
		const addressw0tYOx0 = "0x0000000000000000000000000000000000000001"
		const uintnCNTK4d = BigInt("664")
		const addressRegVAR = accounts[3]
		const addressLriLtpp = accounts[1]
		const addressgiwvjNX = await EqFinanceStakingjoCJD3P.transferOwnership.call(addressxHWu817, {from: accounts[3]});
		const uint6KspbW = await EqFinanceStakingjoCJD3P.getPendingDivs.call(addressw0tYOx0, {from: accounts[3]});
//		const addressQtEraN3 = await EqFinanceStakingjoCJD3P.transferAnyERC20Tokens.call(addressLriLtpp, addressRegVAR, uintnCNTK4d, {from: accounts[0]});
//		const uintGKN0Ft = await EqFinanceStakingjoCJD3P.getStakingAndDaoAmount.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint6KspbW, BigInt("0"))
		await expect(EqFinanceStakingjoCJD3P.transferAnyERC20Tokens.call(addressLriLtpp, addressRegVAR, uintnCNTK4d, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingrQcTQ7z = await EqFinanceStaking.new({from: accounts[1]});
		const uintIqHOqtX = BigInt("1728")
		const addressAWmyFR1 = accounts[2]
		const uintlQxUFSV = await EqFinanceStakingrQcTQ7z.getStakingAndDaoAmount.call({from: accounts[0]});
//		const uintRuNfBED = await EqFinanceStakingrQcTQ7z.withdraw.call(uintIqHOqtX, {from: accounts[4]});
//		const addressXEuGlWR = await EqFinanceStakingrQcTQ7z.transferOwnership.call(addressAWmyFR1, {from: accounts[4]});
//		const uintrJodX8a = await EqFinanceStakingrQcTQ7z.getNumberOfHolders.call({from: accounts[0]});

		assert.equal(uintlQxUFSV, BigInt("3000000000000000000000000"))
		await expect(EqFinanceStakingrQcTQ7z.withdraw.call(uintIqHOqtX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingug9OmiY = await EqFinanceStaking.new({from: accounts[3]});
		const uintSKw2Dh = BigInt("1265")
//		await EqFinanceStakingug9OmiY.onlyOwner.call({from: accounts[2]});
//		const uintVqyRdWf = await EqFinanceStakingug9OmiY.withdraw.call(uintSKw2Dh, {from: "0x0000000000000000000000000000000000000001"});

		await expect(EqFinanceStakingug9OmiY.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingQmO1HXv = await EqFinanceStaking.new({from: accounts[1]});
		const uintPcfncB = BigInt("290")
		const addressXzKAvX = accounts[2]
//		await EqFinanceStakingQmO1HXv.claimDivs.call({from: accounts[2]});
//		const uintui2ts0s = await EqFinanceStakingQmO1HXv.getNumberOfHolders.call({from: accounts[0]});
//		const uintJMnKfBe = await EqFinanceStakingQmO1HXv.withdraw.call(uintPcfncB, {from: accounts[2]});
//		const uintWmMUTzq = await EqFinanceStakingQmO1HXv.getPendingDivs.call(addressXzKAvX, {from: accounts[0]});

		await expect(EqFinanceStakingQmO1HXv.claimDivs.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingug9OmiY = await EqFinanceStaking.new({from: accounts[3]});
		const uintdzlnK5r = BigInt("1261")
		const addressdeNHHt3 = accounts[1]
		const addressJZXPxVa = accounts[2]
//		const addressGG3wuJ2 = await EqFinanceStakingug9OmiY.transferAnyERC20Tokens.call(addressJZXPxVa, addressdeNHHt3, uintdzlnK5r, {from: accounts[3]});
//		await EqFinanceStakingug9OmiY.claimDivs.call({from: accounts[0]});

		await expect(EqFinanceStakingug9OmiY.transferAnyERC20Tokens.call(addressJZXPxVa, addressdeNHHt3, uintdzlnK5r, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})