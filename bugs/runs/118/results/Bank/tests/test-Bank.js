const Bank = artifacts.require("Bank");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Bank', (accounts) => {
	it('test for Bank', async () => {
		const contracthpXEJFH = await Bank.new({from: accounts[5]});
		const amounthAtL1WW = BigInt("1651")
		const tokenhAGOEAP = accounts[1]
		const borrowerkExBf1H = accounts[5]
		const amountny8JovK = BigInt("1972")
		const tokensSTK1wD = accounts[4]
		const amountKzdyeLp = BigInt("1620")
		const tokenG9zPp0H = "0x0000000000000000000000000000000000000001"
		const amountUOWVsq7 = BigInt("689")
		const tokenHibHxlw = accounts[0]
		await contracthpXEJFH.withdraw.call(tokenhAGOEAP, amounthAtL1WW, {from: accounts[4]});
		await contracthpXEJFH.addBorrower.call(borrowerkExBf1H, {from: accounts[0]});
		await contracthpXEJFH.withdraw.call(tokensSTK1wD, amountny8JovK, {from: "0x0000000000000000000000000000000000000001"});
		await contracthpXEJFH.repay.call(tokenG9zPp0H, amountKzdyeLp, {from: accounts[1]});
		await contracthpXEJFH.withdraw.call(tokenHibHxlw, amountUOWVsq7, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contracthpXEJFH.withdraw.call(tokenhAGOEAP, amounthAtL1WW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractPwKocms = await Bank.new({from: "0x0000000000000000000000000000000000000001"});
		const amountczdKxPz = BigInt("1002")
		const tokenckyjM3z = accounts[4]
		const amounttTLBHBg = BigInt("205")
		const tokeniRnlfNO = accounts[0]
		const borrowerI3zg2az = accounts[2]
		const borrowerFlOnO44 = accounts[4]
		const amountbmuB4MO = BigInt("190")
		const tokenAsKaoPR = "0x0000000000000000000000000000000000000001"
		await contractPwKocms.borrow.call(tokenckyjM3z, amountczdKxPz, {from: accounts[5]});
		await contractPwKocms.borrow.call(tokeniRnlfNO, amounttTLBHBg, {from: accounts[1]});
		await contractPwKocms.removeBorrower.call(borrowerI3zg2az, {from: accounts[5]});
		await contractPwKocms.addBorrower.call(borrowerFlOnO44, {from: accounts[1]});
		await contractPwKocms.repay.call(tokenAsKaoPR, amountbmuB4MO, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Bank', async () => {
		const contractdJq2ilJ = await Bank.new({from: accounts[1]});
		const borrowermOUD2u8 = accounts[1]
		const borrowerYS7tLkZ = accounts[4]
		const tokenUCskuFL = accounts[3]
		const amountbsE4TkT = BigInt("1729")
		const tokenQn8EGam = accounts[5]
		const amountW3zCiVK = BigInt("669")
		const tokenturVVd8 = accounts[3]
		await contractdJq2ilJ.addBorrower.call(borrowermOUD2u8, {from: accounts[1]});
		await contractdJq2ilJ.removeBorrower.call(borrowerYS7tLkZ, {from: accounts[1]});
		const balancemneLcOp = await contractdJq2ilJ.totalSupplyOf.call(tokenUCskuFL, {from: accounts[5]});
		await contractdJq2ilJ.withdraw.call(tokenQn8EGam, amountbsE4TkT, {from: accounts[3]});
		await contractdJq2ilJ.repay.call(tokenturVVd8, amountW3zCiVK, {from: accounts[1]});

		await expect(contractdJq2ilJ.addBorrower.call(borrowermOUD2u8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractnwUwNtv = await Bank.new({from: accounts[4]});
		const amountulL3b8U = BigInt("2009")
		const tokenKPvbr7t = "0x0000000000000000000000000000000000000001"
		const amountr4jiVuQ = BigInt("310")
		const tokenJLu7Xy8 = accounts[3]
		const amountfStLZW3 = BigInt("1700")
		const tokenTf1ClcH = accounts[0]
		const amountFAcYgaB = BigInt("1299")
		const tokenCqPnob = accounts[0]
		await contractnwUwNtv.withdraw.call(tokenKPvbr7t, amountulL3b8U, {from: accounts[4]});
		await contractnwUwNtv.borrow.call(tokenJLu7Xy8, amountr4jiVuQ, {from: accounts[2]});
		await contractnwUwNtv.withdraw.call(tokenTf1ClcH, amountfStLZW3, {from: accounts[3]});
		await contractnwUwNtv.borrow.call(tokenCqPnob, amountFAcYgaB, {from: accounts[4]});

		await expect(contractnwUwNtv.withdraw.call(tokenKPvbr7t, amountulL3b8U, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractysdvzA = await Bank.new({from: accounts[5]});
		const amountXhOjfzA = BigInt("235")
		const tokenga9P6VM = accounts[3]
		const amountr9RK4oK = BigInt("680")
		const tokenj30lZOP = accounts[3]
		const amountTsTUwEn = BigInt("1834")
		const tokengIL4vYg = accounts[0]
		await contractysdvzA.deposit.call(tokenga9P6VM, amountXhOjfzA, {from: accounts[4]});
		await contractysdvzA.repay.call(tokenj30lZOP, amountr9RK4oK, {from: accounts[1]});
		await contractysdvzA.borrow.call(tokengIL4vYg, amountTsTUwEn, {from: accounts[5]});

		await expect(contractysdvzA.deposit.call(tokenga9P6VM, amountXhOjfzA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractbXvj9rr = await Bank.new({from: accounts[1]});
		const borroweroIP1zex = accounts[2]
		const amountwfFj5W5 = BigInt("153")
		const tokenQSOWIox = accounts[2]
		const borrowerNEVAvFM = accounts[4]
		const tokenqSs0zDU = accounts[3]
		const amountIlLVHab = BigInt("53")
		const tokenl8PvFfg = "0x0000000000000000000000000000000000000001"
		const amountwepH5Yk = BigInt("669")
		const tokenjV4Esxr = accounts[4]
		const amountnZ7Ag8T = BigInt("1855")
		const whopvwOQ0o = "0x0000000000000000000000000000000000000001"
		const tokenMzI24KF = accounts[3]
		await contractbXvj9rr.addBorrower.call(borroweroIP1zex, {from: accounts[1]});
		await contractbXvj9rr.repay.call(tokenQSOWIox, amountwfFj5W5, {from: accounts[5]});
		await contractbXvj9rr.removeBorrower.call(borrowerNEVAvFM, {from: accounts[1]});
		const balanceyTLv8Dr = await contractbXvj9rr.totalSupplyOf.call(tokenqSs0zDU, {from: accounts[5]});
		await contractbXvj9rr.withdraw.call(tokenl8PvFfg, amountIlLVHab, {from: accounts[4]});
		await contractbXvj9rr.repay.call(tokenjV4Esxr, amountwepH5Yk, {from: accounts[1]});
		await contractbXvj9rr.borrowFor.call(tokenMzI24KF, whopvwOQ0o, amountnZ7Ag8T, {from: accounts[4]});

		await expect(contractbXvj9rr.addBorrower.call(borroweroIP1zex, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractrgM48W = await Bank.new({from: accounts[1]});
		const tokenarJOSI = "0x0000000000000000000000000000000000000000"
		const borrowerSKy9cgR = accounts[1]
		const amountTnxp7XO = BigInt("1010")
		const tokene7vGGdl = accounts[4]
		const amountEnHXHi = BigInt("1196")
		const whoYu5oIBy = accounts[5]
		const tokenzsbXZN6 = "0x0000000000000000000000000000000000000001"
		const tokenNOEmH5R = accounts[4]
		const amount4YZ4uw = BigInt("669")
		const tokenRTn58vY = accounts[4]
		const amountR8ED0aG = BigInt("701")
		const tokenHBOgXNl = accounts[3]
		const balanceAxtgBrH = await contractrgM48W.totalSupplyOf.call(tokenarJOSI, {from: accounts[4]});
		await contractrgM48W.addBorrower.call(borrowerSKy9cgR, {from: accounts[1]});
		await contractrgM48W.deposit.call(tokene7vGGdl, amountTnxp7XO, {from: accounts[2]});
		await contractrgM48W.borrowFor.call(tokenzsbXZN6, whoYu5oIBy, amountEnHXHi, {from: accounts[2]});
		const balancetkwFnh8 = await contractrgM48W.totalSupplyOf.call(tokenNOEmH5R, {from: accounts[5]});
		await contractrgM48W.repay.call(tokenRTn58vY, amount4YZ4uw, {from: accounts[1]});
		await contractrgM48W.deposit.call(tokenHBOgXNl, amountR8ED0aG, {from: accounts[5]});

		assert.equal(balanceAxtgBrH, 0)
		await expect(contractrgM48W.addBorrower.call(borrowerSKy9cgR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})