const Bank = artifacts.require("Bank");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Bank', (accounts) => {
	it('test for Bank', async () => {
		const contractq8wWImG = await Bank.new({from: "0x0000000000000000000000000000000000000001"});
		const amountqWDR2up = BigInt("606")
		const tokenPW6OHjZ = accounts[2]
		const borrowerKf12hXw = accounts[3]
		const amountoqI3H9i = BigInt("1923")
		const tokenevowbNQ = "0x0000000000000000000000000000000000000001"
		await contractq8wWImG.deposit.call(tokenPW6OHjZ, amountqWDR2up, {from: accounts[2]});
		await contractq8wWImG.addBorrower.call(borrowerKf12hXw, {from: accounts[2]});
		await contractq8wWImG.withdraw.call(tokenevowbNQ, amountoqI3H9i, {from: accounts[4]});
	});

	it('test for Bank', async () => {
		const contractMlVnC0 = await Bank.new({from: accounts[1]});
		const borrowerikotMej = accounts[1]
		const amountIiH7bd1 = BigInt("302")
		const tokeng0cT3oJ = accounts[3]
		const borroweruyEChCQ = accounts[3]
		const amountNf3WGV8 = BigInt("1920")
		const tokenTzA6I3r = accounts[2]
		await contractMlVnC0.removeBorrower.call(borrowerikotMej, {from: accounts[4]});
		await contractMlVnC0.withdraw.call(tokeng0cT3oJ, amountIiH7bd1, {from: accounts[3]});
		await contractMlVnC0.addBorrower.call(borroweruyEChCQ, {from: accounts[3]});
		await contractMlVnC0.repay.call(tokenTzA6I3r, amountNf3WGV8, {from: accounts[0]});

		await expect(contractMlVnC0.removeBorrower.call(borrowerikotMej, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractzQLiYlJ = await Bank.new({from: accounts[2]});
		const amountS6Z6OnR = BigInt("1982")
		const tokendXdqbvk = accounts[4]
		const amounttjPZn08 = BigInt("126")
		const tokenKCJN25i = accounts[3]
		const amounty6fj8g = BigInt("397")
		const whoH03RXLG = accounts[5]
		const tokenYR9uwT0 = accounts[0]
		await contractzQLiYlJ.withdraw.call(tokendXdqbvk, amountS6Z6OnR, {from: accounts[2]});
		await contractzQLiYlJ.deposit.call(tokenKCJN25i, amounttjPZn08, {from: accounts[0]});
		await contractzQLiYlJ.borrowFor.call(tokenYR9uwT0, whoH03RXLG, amounty6fj8g, {from: accounts[2]});

		await expect(contractzQLiYlJ.withdraw.call(tokendXdqbvk, amountS6Z6OnR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractbxO4Eu6 = await Bank.new({from: accounts[0]});
		const amountNMxnSxU = BigInt("983")
		const tokenOAgk2fq = accounts[5]
		const borrowerMyPBES = "0x0000000000000000000000000000000000000001"
		const borrowerNC6lvm2 = accounts[3]
		const borrowerGSGyVbw = accounts[2]
		const amountoWdn9B = BigInt("1847")
		const tokenyCtldFj = accounts[0]
		await contractbxO4Eu6.repay.call(tokenOAgk2fq, amountNMxnSxU, {from: accounts[0]});
		await contractbxO4Eu6.removeBorrower.call(borrowerMyPBES, {from: accounts[0]});
		await contractbxO4Eu6.removeBorrower.call(borrowerNC6lvm2, {from: accounts[2]});
		await contractbxO4Eu6.removeBorrower.call(borrowerGSGyVbw, {from: accounts[4]});
		await contractbxO4Eu6.repay.call(tokenyCtldFj, amountoWdn9B, {from: accounts[0]});

		await expect(contractbxO4Eu6.repay.call(tokenOAgk2fq, amountNMxnSxU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contracth2IBAcR = await Bank.new({from: accounts[2]});
		const tokenhL7aNhy = accounts[1]
		const borroweridHGkst = accounts[0]
		const amountMVPsnWu = BigInt("1309")
		const whotlsgDD7 = accounts[1]
		const tokenF5KHfxi = accounts[3]
		const amountjRpsTY = BigInt("1543")
		const tokenNDasqPY = accounts[5]
		const borrowerUYu7FuB = accounts[4]
		const amountakJp5nu = BigInt("621")
		const tokenVIdudae = accounts[0]
		const balancetJj6T6k = await contracth2IBAcR.totalSupplyOf.call(tokenhL7aNhy, {from: accounts[2]});
		await contracth2IBAcR.removeBorrower.call(borroweridHGkst, {from: "0x0000000000000000000000000000000000000001"});
		await contracth2IBAcR.borrowFor.call(tokenF5KHfxi, whotlsgDD7, amountMVPsnWu, {from: accounts[4]});
		await contracth2IBAcR.borrow.call(tokenNDasqPY, amountjRpsTY, {from: accounts[5]});
		await contracth2IBAcR.addBorrower.call(borrowerUYu7FuB, {from: accounts[4]});
		await contracth2IBAcR.borrow.call(tokenVIdudae, amountakJp5nu, {from: accounts[3]});

		await expect(contracth2IBAcR.totalSupplyOf.call(tokenhL7aNhy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractv2mQxn = await Bank.new({from: accounts[4]});
		const borrowerLTUbmBg = accounts[3]
		const amountdqlvukc = BigInt("1796")
		const whoMzeoDb6 = accounts[0]
		const tokenWdZPM3X = accounts[0]
		const borrowerisHviDO = accounts[4]
		const amountsBdUtUV = BigInt("1582")
		const token8Tf107 = accounts[3]
		await contractv2mQxn.addBorrower.call(borrowerLTUbmBg, {from: accounts[4]});
		await contractv2mQxn.borrowFor.call(tokenWdZPM3X, whoMzeoDb6, amountdqlvukc, {from: accounts[4]});
		await contractv2mQxn.removeBorrower.call(borrowerisHviDO, {from: accounts[1]});
		await contractv2mQxn.repay.call(token8Tf107, amountsBdUtUV, {from: accounts[0]});

		await expect(contractv2mQxn.addBorrower.call(borrowerLTUbmBg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractxBgnieS = await Bank.new({from: accounts[5]});
		const amountHNDwUQT = BigInt("103")
		const tokennOzraSQ = accounts[2]
		const tokenyTLOyS7 = "0x0000000000000000000000000000000000000001"
		const amountw84oRCk = BigInt("881")
		const tokenrMSu9J7 = accounts[0]
		await contractxBgnieS.deposit.call(tokennOzraSQ, amountHNDwUQT, {from: accounts[5]});
		const balanceFwSO2UL = await contractxBgnieS.totalSupplyOf.call(tokenyTLOyS7, {from: accounts[2]});
		await contractxBgnieS.withdraw.call(tokenrMSu9J7, amountw84oRCk, {from: accounts[2]});

		await expect(contractxBgnieS.deposit.call(tokennOzraSQ, amountHNDwUQT, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractp3f4lp2 = await Bank.new({from: accounts[2]});
		const tokenfsR2J66 = "0x0000000000000000000000000000000000000000"
		const amountt5C8xxR = BigInt("1309")
		const whob8QAtqI = accounts[2]
		const tokenCbujnkV = accounts[3]
		const amountCRDJCiy = BigInt("1543")
		const tokenzm6XUlz = accounts[5]
		const amountJb7ule9 = BigInt("753")
		const whoMqYP1G = accounts[4]
		const tokenxWCYIdU = accounts[5]
		const borroweruhTk1I8 = accounts[6]
		const balanceh2YCu8 = await contractp3f4lp2.totalSupplyOf.call(tokenfsR2J66, {from: accounts[3]});
		await contractp3f4lp2.borrowFor.call(tokenCbujnkV, whob8QAtqI, amountt5C8xxR, {from: accounts[4]});
		await contractp3f4lp2.borrow.call(tokenzm6XUlz, amountCRDJCiy, {from: accounts[5]});
		await contractp3f4lp2.borrowFor.call(tokenxWCYIdU, whoMqYP1G, amountJb7ule9, {from: accounts[4]});
		await contractp3f4lp2.addBorrower.call(borroweruhTk1I8, {from: accounts[4]});

		assert.equal(balanceh2YCu8, 0)
		await expect(contractp3f4lp2.borrowFor.call(tokenCbujnkV, whob8QAtqI, amountt5C8xxR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractD8BPjz7 = await Bank.new({from: accounts[0]});
		const borroweripbBHkJ = "0x0000000000000000000000000000000000000001"
		const amountV512Vi2 = BigInt("757")
		const tokenUWYZKQn = accounts[2]
		const amountSVpt3f2 = BigInt("724")
		const tokenn0vhqvN = "0x0000000000000000000000000000000000000001"
		await contractD8BPjz7.removeBorrower.call(borroweripbBHkJ, {from: accounts[0]});
		await contractD8BPjz7.borrow.call(tokenUWYZKQn, amountV512Vi2, {from: accounts[5]});
		await contractD8BPjz7.withdraw.call(tokenn0vhqvN, amountSVpt3f2, {from: accounts[2]});

		await expect(contractD8BPjz7.removeBorrower.call(borroweripbBHkJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})