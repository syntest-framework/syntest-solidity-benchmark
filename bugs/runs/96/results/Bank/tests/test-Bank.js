const Bank = artifacts.require("Bank");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Bank', (accounts) => {
	it('test for Bank', async () => {
		const contracte3JZ9ZM = await Bank.new({from: accounts[4]});
		const amountGy5nQPU = BigInt("854")
		const tokenAfqOpAk = accounts[0]
		const borrowerDSYHulc = accounts[2]
		await contracte3JZ9ZM.deposit.call(tokenAfqOpAk, amountGy5nQPU, {from: accounts[3]});
		await contracte3JZ9ZM.addBorrower.call(borrowerDSYHulc, {from: accounts[4]});

		await expect(contracte3JZ9ZM.deposit.call(tokenAfqOpAk, amountGy5nQPU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractYTfYgso = await Bank.new({from: accounts[4]});
		const amountO3Lp4wl = BigInt("134")
		const tokentd583BE = accounts[4]
		const tokenTtQVsZv = accounts[3]
		const borrowerc6j8ntY = accounts[4]
		await contractYTfYgso.repay.call(tokentd583BE, amountO3Lp4wl, {from: accounts[2]});
		const balanceemncblG = await contractYTfYgso.totalSupplyOf.call(tokenTtQVsZv, {from: accounts[3]});
		await contractYTfYgso.removeBorrower.call(borrowerc6j8ntY, {from: accounts[2]});

		await expect(contractYTfYgso.repay.call(tokentd583BE, amountO3Lp4wl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractfPTHN11 = await Bank.new({from: accounts[1]});
		const tokenWb5xxE = accounts[3]
		const amountu81CR81 = BigInt("1870")
		const whobe1ui8W = accounts[3]
		const tokenstjJuYN = accounts[2]
		const balanceAtGYVpV = await contractfPTHN11.totalSupplyOf.call(tokenWb5xxE, {from: accounts[1]});
		await contractfPTHN11.borrowFor.call(tokenstjJuYN, whobe1ui8W, amountu81CR81, {from: accounts[4]});

		await expect(contractfPTHN11.totalSupplyOf.call(tokenWb5xxE, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractNzo4oC7 = await Bank.new({from: "0x0000000000000000000000000000000000000001"});
		const amountPLGjXh = BigInt("664")
		const tokenF8Kf5Ij = accounts[0]
		const amountIroVqdC = BigInt("334")
		const whotRfUUUZ = accounts[2]
		const tokenSuWLDUU = accounts[0]
		const amountDTGNnyT = BigInt("838")
		const tokenqIsXHxy = "0x0000000000000000000000000000000000000001"
		const amountcsfTwMU = BigInt("685")
		const whouvqjc5b = accounts[4]
		const tokene84zYGK = accounts[1]
		const borroweroU7zn9O = accounts[3]
		await contractNzo4oC7.borrow.call(tokenF8Kf5Ij, amountPLGjXh, {from: accounts[1]});
		await contractNzo4oC7.borrowFor.call(tokenSuWLDUU, whotRfUUUZ, amountIroVqdC, {from: accounts[3]});
		await contractNzo4oC7.borrow.call(tokenqIsXHxy, amountDTGNnyT, {from: accounts[0]});
		await contractNzo4oC7.borrowFor.call(tokene84zYGK, whouvqjc5b, amountcsfTwMU, {from: accounts[2]});
		await contractNzo4oC7.removeBorrower.call(borroweroU7zn9O, {from: accounts[3]});
	});

	it('test for Bank', async () => {
		const contractx71p0iU = await Bank.new({from: accounts[1]});
		const borrowerRCh3H95 = "0x0000000000000000000000000000000000000001"
		const tokenLuu7Pdr = accounts[3]
		const borrowerMzmnCNI = accounts[1]
		const amountKmFLDON = BigInt("1870")
		const whoM1aUMVj = accounts[4]
		const tokenvrVuHz = accounts[2]
		const borrowerigHmYZ8 = accounts[3]
		await contractx71p0iU.removeBorrower.call(borrowerRCh3H95, {from: accounts[1]});
		const balanceZkQRyfz = await contractx71p0iU.totalSupplyOf.call(tokenLuu7Pdr, {from: accounts[1]});
		await contractx71p0iU.addBorrower.call(borrowerMzmnCNI, {from: accounts[0]});
		await contractx71p0iU.borrowFor.call(tokenvrVuHz, whoM1aUMVj, amountKmFLDON, {from: accounts[4]});
		await contractx71p0iU.removeBorrower.call(borrowerigHmYZ8, {from: accounts[4]});

		await expect(contractx71p0iU.removeBorrower.call(borrowerRCh3H95, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractwJjU2O7 = await Bank.new({from: accounts[1]});
		const borrowerI3CALvj = accounts[1]
		const tokenexcCC8u = accounts[3]
		const amountN7i0xK = BigInt("692")
		const whoL8WLYrc = accounts[1]
		const tokenk1xW8VX = accounts[4]
		const amountl217lQQ = BigInt("1870")
		const whoOWm3hKZ = accounts[3]
		const tokenef2HK69 = accounts[3]
		await contractwJjU2O7.addBorrower.call(borrowerI3CALvj, {from: accounts[1]});
		const balanceP7gmgGC = await contractwJjU2O7.totalSupplyOf.call(tokenexcCC8u, {from: accounts[1]});
		await contractwJjU2O7.borrowFor.call(tokenk1xW8VX, whoL8WLYrc, amountN7i0xK, {from: accounts[4]});
		await contractwJjU2O7.borrowFor.call(tokenef2HK69, whoOWm3hKZ, amountl217lQQ, {from: accounts[4]});

		await expect(contractwJjU2O7.addBorrower.call(borrowerI3CALvj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractxG60mhl = await Bank.new({from: accounts[2]});
		const amountC0P88LS = BigInt("2033")
		const tokenbqMGfRO = accounts[1]
		const borrowerF0E58Gk = accounts[0]
		const amountZNaAUkf = BigInt("1476")
		const whovXfmcBB = accounts[2]
		const tokenRTNiU0o = accounts[1]
		const borroweropAYSh = accounts[0]
		const amounttzcYPU = BigInt("1689")
		const whoXo0kAtR = accounts[5]
		const tokenQScNNii = accounts[2]
		const borrowerMB0sVr = accounts[4]
		await contractxG60mhl.withdraw.call(tokenbqMGfRO, amountC0P88LS, {from: accounts[2]});
		await contractxG60mhl.addBorrower.call(borrowerF0E58Gk, {from: accounts[1]});
		await contractxG60mhl.borrowFor.call(tokenRTNiU0o, whovXfmcBB, amountZNaAUkf, {from: accounts[3]});
		await contractxG60mhl.removeBorrower.call(borroweropAYSh, {from: accounts[2]});
		await contractxG60mhl.borrowFor.call(tokenQScNNii, whoXo0kAtR, amounttzcYPU, {from: accounts[4]});
		await contractxG60mhl.removeBorrower.call(borrowerMB0sVr, {from: accounts[2]});

		await expect(contractxG60mhl.withdraw.call(tokenbqMGfRO, amountC0P88LS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractXMxkk6W = await Bank.new({from: accounts[4]});
		const tokenMY8IrFF = "0x0000000000000000000000000000000000000000"
		const amountVjenAxZ = BigInt("1695")
		const tokenURne3FZ = accounts[4]
		const balanceLWiLl5C = await contractXMxkk6W.totalSupplyOf.call(tokenMY8IrFF, {from: accounts[3]});
		await contractXMxkk6W.deposit.call(tokenURne3FZ, amountVjenAxZ, {from: accounts[2]});

		assert.equal(balanceLWiLl5C, 0)
		await expect(contractXMxkk6W.deposit.call(tokenURne3FZ, amountVjenAxZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})