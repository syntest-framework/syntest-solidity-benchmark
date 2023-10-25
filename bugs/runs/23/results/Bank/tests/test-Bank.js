const Bank = artifacts.require("Bank");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Bank', (accounts) => {
	it('test for Bank', async () => {
		const contractdsklglB = await Bank.new({from: accounts[0]});
		const tokenFlKzNUK = accounts[4]
		const amountOQh4e68 = BigInt("86")
		const tokenUXnYYQM = accounts[2]
		const amountoAn18l4 = BigInt("922")
		const tokenuMKXRXR = accounts[0]
		const amountbYYPxek = BigInt("1407")
		const whoEBMLyHl = accounts[4]
		const token6wUrDo = accounts[1]
		const amountWe1uvF6 = BigInt("1355")
		const tokenHgRIHS = accounts[2]
		const balance3ayRhw = await contractdsklglB.totalSupplyOf.call(tokenFlKzNUK, {from: accounts[1]});
		await contractdsklglB.repay.call(tokenUXnYYQM, amountOQh4e68, {from: accounts[2]});
		await contractdsklglB.borrow.call(tokenuMKXRXR, amountoAn18l4, {from: accounts[2]});
		await contractdsklglB.borrowFor.call(token6wUrDo, whoEBMLyHl, amountbYYPxek, {from: accounts[1]});
		await contractdsklglB.borrow.call(tokenHgRIHS, amountWe1uvF6, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractdsklglB.totalSupplyOf.call(tokenFlKzNUK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contract0gL29B = await Bank.new({from: accounts[2]});
		const amountJfUiTS = BigInt("512")
		const tokenWQbSAyK = accounts[0]
		const amounthrpJQ6B = BigInt("669")
		const tokenAubbLqA = accounts[0]
		const amountLbLiOLB = BigInt("1170")
		const tokendy9keCB = accounts[1]
		await contract0gL29B.deposit.call(tokenWQbSAyK, amountJfUiTS, {from: accounts[4]});
		await contract0gL29B.borrow.call(tokenAubbLqA, amounthrpJQ6B, {from: accounts[5]});
		await contract0gL29B.repay.call(tokendy9keCB, amountLbLiOLB, {from: accounts[3]});

		await expect(contract0gL29B.deposit.call(tokenWQbSAyK, amountJfUiTS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractk7rwqGL = await Bank.new({from: accounts[3]});
		const borrowerY2w11Su = accounts[3]
		const borroweroIioIU2 = accounts[2]
		const amountw8Z6lDb = BigInt("1133")
		const tokenoQRWgxj = accounts[4]
		await contractk7rwqGL.removeBorrower.call(borrowerY2w11Su, {from: accounts[3]});
		await contractk7rwqGL.addBorrower.call(borroweroIioIU2, {from: accounts[2]});
		await contractk7rwqGL.borrow.call(tokenoQRWgxj, amountw8Z6lDb, {from: accounts[4]});

		await expect(contractk7rwqGL.removeBorrower.call(borrowerY2w11Su, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contracttZBN3HF = await Bank.new({from: accounts[3]});
		const amountwTP3rxQ = BigInt("1486")
		const tokensEKaOlU = accounts[1]
		const borrowercsb7Xoy = accounts[1]
		const amountM25zktR = BigInt("1514")
		const tokenA5NPDXD = accounts[3]
		const borrowerJhNeFJY = accounts[1]
		const tokeneB4XBto = accounts[4]
		await contracttZBN3HF.repay.call(tokensEKaOlU, amountwTP3rxQ, {from: accounts[3]});
		await contracttZBN3HF.removeBorrower.call(borrowercsb7Xoy, {from: accounts[1]});
		await contracttZBN3HF.borrow.call(tokenA5NPDXD, amountM25zktR, {from: accounts[0]});
		await contracttZBN3HF.removeBorrower.call(borrowerJhNeFJY, {from: "0x0000000000000000000000000000000000000001"});
		const balanceM3OumC9 = await contracttZBN3HF.totalSupplyOf.call(tokeneB4XBto, {from: accounts[2]});

		await expect(contracttZBN3HF.repay.call(tokensEKaOlU, amountwTP3rxQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractybxIYSv = await Bank.new({from: accounts[2]});
		const amountNnIxQPH = BigInt("614")
		const tokenJUx7DRS = "0x0000000000000000000000000000000000000001"
		const amountMcPQM7w = BigInt("352")
		const whoMFNv8kV = accounts[4]
		const tokenOhrdqpU = accounts[5]
		await contractybxIYSv.withdraw.call(tokenJUx7DRS, amountNnIxQPH, {from: accounts[2]});
		await contractybxIYSv.borrowFor.call(tokenOhrdqpU, whoMFNv8kV, amountMcPQM7w, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractybxIYSv.withdraw.call(tokenJUx7DRS, amountNnIxQPH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractPjTZTyv = await Bank.new({from: accounts[3]});
		const borrowerCiOr37E = accounts[2]
		const tokenyesX2td = accounts[4]
		await contractPjTZTyv.addBorrower.call(borrowerCiOr37E, {from: accounts[3]});
		const balancePdqIgQn = await contractPjTZTyv.totalSupplyOf.call(tokenyesX2td, {from: accounts[2]});

		await expect(contractPjTZTyv.addBorrower.call(borrowerCiOr37E, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractGmODHz = await Bank.new({from: "0x0000000000000000000000000000000000000001"});
		const borrowerCJKZYW1 = accounts[0]
		const amountZj4CU2c = BigInt("1695")
		const tokenwZi0r1v = accounts[5]
		await contractGmODHz.removeBorrower.call(borrowerCJKZYW1, {from: accounts[2]});
		await contractGmODHz.withdraw.call(tokenwZi0r1v, amountZj4CU2c, {from: accounts[3]});
	});

	it('test for Bank', async () => {
		const contractBvyE7Kx = await Bank.new({from: accounts[3]});
		const tokenoT9KQAU = "0x0000000000000000000000000000000000000000"
		const tokenQPILIsE = accounts[5]
		const amountqZ0ODK1 = BigInt("851")
		const tokenNIdsCoW = accounts[1]
		const balancemjPTQAC = await contractBvyE7Kx.totalSupplyOf.call(tokenoT9KQAU, {from: "0x0000000000000000000000000000000000000001"});
		const balances0mTU0p = await contractBvyE7Kx.totalSupplyOf.call(tokenQPILIsE, {from: accounts[2]});
		await contractBvyE7Kx.repay.call(tokenNIdsCoW, amountqZ0ODK1, {from: accounts[1]});

		assert.equal(balancemjPTQAC, 0)
		await expect(contractBvyE7Kx.totalSupplyOf.call(tokenQPILIsE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})