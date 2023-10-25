const Bank = artifacts.require("Bank");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Bank', (accounts) => {
	it('test for Bank', async () => {
		const contractC9ClxwK = await Bank.new({from: accounts[3]});
		const amountLiYTAtl = BigInt("1902")
		const tokenHEfIH5S = accounts[4]
		const borrowerq1rUl0 = accounts[5]
		const amountpVvHACv = BigInt("1553")
		const whoKfVHaw = accounts[4]
		const tokenuoEYkXu = accounts[0]
		const amountjTiuo2u = BigInt("1308")
		const tokenCYAdHYJ = accounts[2]
		const borrowersdu8TcX = accounts[0]
		await contractC9ClxwK.borrow.call(tokenHEfIH5S, amountLiYTAtl, {from: accounts[1]});
		await contractC9ClxwK.removeBorrower.call(borrowerq1rUl0, {from: accounts[4]});
		await contractC9ClxwK.borrowFor.call(tokenuoEYkXu, whoKfVHaw, amountpVvHACv, {from: accounts[3]});
		await contractC9ClxwK.deposit.call(tokenCYAdHYJ, amountjTiuo2u, {from: accounts[3]});
		await contractC9ClxwK.addBorrower.call(borrowersdu8TcX, {from: accounts[2]});

		await expect(contractC9ClxwK.borrow.call(tokenHEfIH5S, amountLiYTAtl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractmmAqqNp = await Bank.new({from: accounts[1]});
		const tokenFnGpVeG = accounts[0]
		const tokenmhp8CwU = accounts[1]
		const amountYlMvD63 = BigInt("1138")
		const whoXtKJhr = accounts[1]
		const tokengMhVTt = accounts[1]
		const balanceEosC3B = await contractmmAqqNp.totalSupplyOf.call(tokenFnGpVeG, {from: accounts[1]});
		const balanceIQUTMZE = await contractmmAqqNp.totalSupplyOf.call(tokenmhp8CwU, {from: accounts[5]});
		await contractmmAqqNp.borrowFor.call(tokengMhVTt, whoXtKJhr, amountYlMvD63, {from: accounts[0]});

		await expect(contractmmAqqNp.totalSupplyOf.call(tokenFnGpVeG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractwPQ6Uqz = await Bank.new({from: accounts[0]});
		const amountpufRHX3 = BigInt("1190")
		const tokenkdqihrC = accounts[2]
		const amountxYei7RP = BigInt("1206")
		const tokenL4sSOc9 = accounts[0]
		const amountx5Vn3mX = BigInt("798")
		const tokenpOqX6yG = accounts[0]
		await contractwPQ6Uqz.deposit.call(tokenkdqihrC, amountpufRHX3, {from: accounts[5]});
		await contractwPQ6Uqz.repay.call(tokenL4sSOc9, amountxYei7RP, {from: accounts[3]});
		await contractwPQ6Uqz.deposit.call(tokenpOqX6yG, amountx5Vn3mX, {from: accounts[3]});

		await expect(contractwPQ6Uqz.deposit.call(tokenkdqihrC, amountpufRHX3, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractXggYrcL = await Bank.new({from: "0x0000000000000000000000000000000000000001"});
		const amountazliUzO = BigInt("108")
		const tokenXsFKEYK = "0x0000000000000000000000000000000000000001"
		const amountS3wXLz = BigInt("1343")
		const tokenYcwvIRk = accounts[3]
		const borrowermoBedrJ = accounts[5]
		await contractXggYrcL.deposit.call(tokenXsFKEYK, amountazliUzO, {from: accounts[3]});
		await contractXggYrcL.deposit.call(tokenYcwvIRk, amountS3wXLz, {from: accounts[0]});
		await contractXggYrcL.removeBorrower.call(borrowermoBedrJ, {from: accounts[5]});
	});

	it('test for Bank', async () => {
		const contractWv2fSvh = await Bank.new({from: accounts[0]});
		const borrowerNpEkjbs = accounts[5]
		const amountq1n6yaV = BigInt("1190")
		const tokenXQQjS4H = accounts[2]
		const amountvHQOayK = BigInt("1206")
		const tokenww1ryRG = accounts[1]
		const amountbuaPDW1 = BigInt("798")
		const tokengykq13Q = accounts[0]
		await contractWv2fSvh.addBorrower.call(borrowerNpEkjbs, {from: accounts[0]});
		await contractWv2fSvh.deposit.call(tokenXQQjS4H, amountq1n6yaV, {from: accounts[5]});
		await contractWv2fSvh.repay.call(tokenww1ryRG, amountvHQOayK, {from: accounts[3]});
		await contractWv2fSvh.deposit.call(tokengykq13Q, amountbuaPDW1, {from: accounts[3]});

		await expect(contractWv2fSvh.addBorrower.call(borrowerNpEkjbs, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractomYxMnm = await Bank.new({from: accounts[1]});
		const amountWDaSgW9 = BigInt("639")
		const tokenJg1eqnF = accounts[4]
		const tokenc5TBAA = accounts[1]
		const amountxkhErl = BigInt("1138")
		const whoxbt9cIn = accounts[1]
		const tokenSKt2p9P = accounts[1]
		const borrowerEzKGVj5 = accounts[2]
		await contractomYxMnm.withdraw.call(tokenJg1eqnF, amountWDaSgW9, {from: accounts[1]});
		const balancewWmKmV = await contractomYxMnm.totalSupplyOf.call(tokenc5TBAA, {from: accounts[5]});
		await contractomYxMnm.borrowFor.call(tokenSKt2p9P, whoxbt9cIn, amountxkhErl, {from: accounts[0]});
		await contractomYxMnm.removeBorrower.call(borrowerEzKGVj5, {from: accounts[0]});

		await expect(contractomYxMnm.withdraw.call(tokenJg1eqnF, amountWDaSgW9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractskJytl9 = await Bank.new({from: accounts[0]});
		const tokenM4be0Ti = "0x0000000000000000000000000000000000000000"
		const borrowerjwlXfyR = accounts[2]
		const amountqw9QM94 = BigInt("1226")
		const tokenqZTLR2 = accounts[2]
		const tokenCM1j7Sk = accounts[4]
		const amountwIURrdg = BigInt("1060")
		const whocWtptxD = accounts[3]
		const tokenZm2qDgK = "0x0000000000000000000000000000000000000001"
		const borrowerXRxDBUh = accounts[3]
		const balancewkspguJ = await contractskJytl9.totalSupplyOf.call(tokenM4be0Ti, {from: accounts[0]});
		await contractskJytl9.addBorrower.call(borrowerjwlXfyR, {from: accounts[2]});
		await contractskJytl9.withdraw.call(tokenqZTLR2, amountqw9QM94, {from: accounts[0]});
		const balanceankQsN = await contractskJytl9.totalSupplyOf.call(tokenCM1j7Sk, {from: accounts[3]});
		await contractskJytl9.borrowFor.call(tokenZm2qDgK, whocWtptxD, amountwIURrdg, {from: "0x0000000000000000000000000000000000000001"});
		await contractskJytl9.addBorrower.call(borrowerXRxDBUh, {from: accounts[1]});

		assert.equal(balancewkspguJ, 0)
		await expect(contractskJytl9.addBorrower.call(borrowerjwlXfyR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractOQCqbcX = await Bank.new({from: accounts[0]});
		const amountjfQRzJb = BigInt("2009")
		const tokenMufqi9b = accounts[1]
		const amountxPqTJEf = BigInt("1258")
		const tokenn5i70P9 = accounts[4]
		const amountXY0rFzo = BigInt("1013")
		const tokenTVWk5Km = accounts[3]
		const amountitFI7Oj = BigInt("863")
		const tokenM9sRBGw = "0x0000000000000000000000000000000000000001"
		const amountfoW7FzO = BigInt("1284")
		const tokeniY58Acx = accounts[2]
		await contractOQCqbcX.repay.call(tokenMufqi9b, amountjfQRzJb, {from: accounts[1]});
		await contractOQCqbcX.borrow.call(tokenn5i70P9, amountxPqTJEf, {from: accounts[0]});
		await contractOQCqbcX.repay.call(tokenTVWk5Km, amountXY0rFzo, {from: accounts[2]});
		await contractOQCqbcX.borrow.call(tokenM9sRBGw, amountitFI7Oj, {from: accounts[2]});
		await contractOQCqbcX.withdraw.call(tokeniY58Acx, amountfoW7FzO, {from: accounts[4]});

		await expect(contractOQCqbcX.repay.call(tokenMufqi9b, amountjfQRzJb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractp96VE5a = await Bank.new({from: accounts[0]});
		const borrowerb5aC6ee = accounts[1]
		const tokenF4QS1Wh = "0x0000000000000000000000000000000000000001"
		const borrowerkWpVHXT = accounts[2]
		const amountotYoyIG = BigInt("1226")
		const tokenC6ceKyk = accounts[2]
		const amountXyBM3Iw = BigInt("1030")
		const whoy27VyM7 = accounts[4]
		const tokenz7o5rIs = "0x0000000000000000000000000000000000000001"
		const borrowerYybTRXT = accounts[3]
		await contractp96VE5a.removeBorrower.call(borrowerb5aC6ee, {from: accounts[0]});
		const balanceB0ZgyRc = await contractp96VE5a.totalSupplyOf.call(tokenF4QS1Wh, {from: accounts[0]});
		await contractp96VE5a.addBorrower.call(borrowerkWpVHXT, {from: accounts[2]});
		await contractp96VE5a.withdraw.call(tokenC6ceKyk, amountotYoyIG, {from: accounts[0]});
		await contractp96VE5a.borrowFor.call(tokenz7o5rIs, whoy27VyM7, amountXyBM3Iw, {from: "0x0000000000000000000000000000000000000001"});
		await contractp96VE5a.addBorrower.call(borrowerYybTRXT, {from: accounts[1]});

		await expect(contractp96VE5a.removeBorrower.call(borrowerb5aC6ee, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})