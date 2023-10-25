const Bank = artifacts.require("Bank");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Bank', (accounts) => {
	it('test for Bank', async () => {
		const contract9g8XS8 = await Bank.new({from: accounts[3]});
		const tokena2Bw324 = accounts[3]
		const amountivQTv0p = BigInt("618")
		const tokenz0wFAGH = accounts[3]
		const balanceltvQdhJ = await contract9g8XS8.totalSupplyOf.call(tokena2Bw324, {from: accounts[5]});
		await contract9g8XS8.borrow.call(tokenz0wFAGH, amountivQTv0p, {from: accounts[2]});

		await expect(contract9g8XS8.totalSupplyOf.call(tokena2Bw324, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractJdOUoqo = await Bank.new({from: accounts[1]});
		const amountvqVHIMg = BigInt("1053")
		const tokenEgBy4sa = accounts[0]
		const amountnQzd1y1 = BigInt("291")
		const tokenxpbc4yo = accounts[3]
		const amountTdRtH1c = BigInt("534")
		const tokenEXTQHV5 = accounts[4]
		const amountFLXIEVY = BigInt("806")
		const tokenFWCgGB = accounts[0]
		const amountLKlBuLN = BigInt("1080")
		const tokenJ330OCr = accounts[0]
		const tokenUFFu4Xx = accounts[4]
		await contractJdOUoqo.repay.call(tokenEgBy4sa, amountvqVHIMg, {from: accounts[1]});
		await contractJdOUoqo.repay.call(tokenxpbc4yo, amountnQzd1y1, {from: accounts[3]});
		await contractJdOUoqo.borrow.call(tokenEXTQHV5, amountTdRtH1c, {from: accounts[3]});
		await contractJdOUoqo.borrow.call(tokenFWCgGB, amountFLXIEVY, {from: accounts[5]});
		await contractJdOUoqo.withdraw.call(tokenJ330OCr, amountLKlBuLN, {from: accounts[5]});
		const balanceD5zeGn = await contractJdOUoqo.totalSupplyOf.call(tokenUFFu4Xx, {from: accounts[0]});

		await expect(contractJdOUoqo.repay.call(tokenEgBy4sa, amountvqVHIMg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractOizR2T7 = await Bank.new({from: accounts[2]});
		const tokeniaHkKSX = "0x0000000000000000000000000000000000000000"
		const amountCKHg5gT = BigInt("917")
		const tokenB6yGCVC = accounts[0]
		const balanceVbw68tk = await contractOizR2T7.totalSupplyOf.call(tokeniaHkKSX, {from: accounts[4]});
		await contractOizR2T7.repay.call(tokenB6yGCVC, amountCKHg5gT, {from: accounts[4]});

		assert.equal(balanceVbw68tk, 0)
		await expect(contractOizR2T7.repay.call(tokenB6yGCVC, amountCKHg5gT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractgwbKfuM = await Bank.new({from: accounts[3]});
		const amountHEeg4mj = BigInt("100")
		const tokeng8lxH5Y = accounts[1]
		const amountwesZFlW = BigInt("1767")
		const whoD5MMnIs = accounts[2]
		const tokenvmzIcaX = accounts[4]
		const tokenZMzXN05 = accounts[5]
		await contractgwbKfuM.deposit.call(tokeng8lxH5Y, amountHEeg4mj, {from: accounts[2]});
		await contractgwbKfuM.borrowFor.call(tokenvmzIcaX, whoD5MMnIs, amountwesZFlW, {from: accounts[5]});
		const balancevlkhn9 = await contractgwbKfuM.totalSupplyOf.call(tokenZMzXN05, {from: accounts[5]});

		await expect(contractgwbKfuM.deposit.call(tokeng8lxH5Y, amountHEeg4mj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractbGF3ANj = await Bank.new({from: accounts[3]});
		const borrowerAfJjKLl = accounts[1]
		const tokenIckWdpb = accounts[4]
		await contractbGF3ANj.addBorrower.call(borrowerAfJjKLl, {from: accounts[3]});
		const balanceSk9N03x = await contractbGF3ANj.totalSupplyOf.call(tokenIckWdpb, {from: accounts[5]});

		await expect(contractbGF3ANj.addBorrower.call(borrowerAfJjKLl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractYESdBjw = await Bank.new({from: accounts[0]});
		const borrowerNknO4A8 = accounts[0]
		const amountbEBmhye = BigInt("77")
		const tokenzIWfHz7 = accounts[3]
		const amountvUGOVBf = BigInt("243")
		const whopyZh4b = accounts[4]
		const tokenLMDP5qG = accounts[4]
		await contractYESdBjw.removeBorrower.call(borrowerNknO4A8, {from: accounts[0]});
		await contractYESdBjw.deposit.call(tokenzIWfHz7, amountbEBmhye, {from: accounts[4]});
		await contractYESdBjw.borrowFor.call(tokenLMDP5qG, whopyZh4b, amountvUGOVBf, {from: accounts[0]});

		await expect(contractYESdBjw.removeBorrower.call(borrowerNknO4A8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractPDw01cx = await Bank.new({from: accounts[3]});
		const amountUt5ueo = BigInt("1718")
		const tokenMil3i5L = accounts[1]
		const tokenPtzhLzl = accounts[5]
		await contractPDw01cx.withdraw.call(tokenMil3i5L, amountUt5ueo, {from: accounts[3]});
		const balancekWHMTmX = await contractPDw01cx.totalSupplyOf.call(tokenPtzhLzl, {from: accounts[5]});

		await expect(contractPDw01cx.withdraw.call(tokenMil3i5L, amountUt5ueo, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractDcT6Xxp = await Bank.new({from: "0x0000000000000000000000000000000000000001"});
		const amountHIUbe7u = BigInt("791")
		const tokenafTy3JG = accounts[3]
		const amountBL1hoG = BigInt("808")
		const whou8MyljX = "0x0000000000000000000000000000000000000001"
		const tokeneax6KGz = accounts[0]
		const amountu1xPVfl = BigInt("764")
		const whoSiD87mX = accounts[1]
		const tokenRko1gmU = accounts[3]
		const amountbS9MRxQ = BigInt("753")
		const tokenlI7kXAJ = accounts[1]
		const amountSojwroM = BigInt("1501")
		const tokenibG7kwl = accounts[4]
		await contractDcT6Xxp.withdraw.call(tokenafTy3JG, amountHIUbe7u, {from: accounts[1]});
		await contractDcT6Xxp.borrowFor.call(tokeneax6KGz, whou8MyljX, amountBL1hoG, {from: accounts[4]});
		await contractDcT6Xxp.borrowFor.call(tokenRko1gmU, whoSiD87mX, amountu1xPVfl, {from: "0x0000000000000000000000000000000000000001"});
		await contractDcT6Xxp.deposit.call(tokenlI7kXAJ, amountbS9MRxQ, {from: accounts[4]});
		await contractDcT6Xxp.borrow.call(tokenibG7kwl, amountSojwroM, {from: accounts[4]});
	});
})