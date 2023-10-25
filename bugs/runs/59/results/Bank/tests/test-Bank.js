const Bank = artifacts.require("Bank");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Bank', (accounts) => {
	it('test for Bank', async () => {
		const contractCLMRgm4 = await Bank.new({from: accounts[1]});
		const amountItl8hZm = BigInt("1635")
		const tokengWAVjVp = accounts[2]
		const tokenmD1n7Gv = "0x0000000000000000000000000000000000000001"
		const amounteFf6ow = BigInt("1306")
		const tokenZkCbVHw = accounts[3]
		await contractCLMRgm4.borrow.call(tokengWAVjVp, amountItl8hZm, {from: accounts[1]});
		const balanceSqh8rXm = await contractCLMRgm4.totalSupplyOf.call(tokenmD1n7Gv, {from: accounts[2]});
		await contractCLMRgm4.withdraw.call(tokenZkCbVHw, amounteFf6ow, {from: accounts[1]});

		await expect(contractCLMRgm4.borrow.call(tokengWAVjVp, amountItl8hZm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractOHGmC8 = await Bank.new({from: accounts[3]});
		const tokenNRBmRy9 = accounts[5]
		const amountlzdBuIO = BigInt("1096")
		const whoT5lC8bf = accounts[2]
		const tokenRuzYrnp = accounts[5]
		const borrowerjDFpKHf = accounts[1]
		const balancevGnxnVo = await contractOHGmC8.totalSupplyOf.call(tokenNRBmRy9, {from: accounts[0]});
		await contractOHGmC8.borrowFor.call(tokenRuzYrnp, whoT5lC8bf, amountlzdBuIO, {from: accounts[1]});
		await contractOHGmC8.removeBorrower.call(borrowerjDFpKHf, {from: accounts[0]});

		await expect(contractOHGmC8.totalSupplyOf.call(tokenNRBmRy9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractHRJBqmx = await Bank.new({from: accounts[1]});
		const amountkUlDQxE = BigInt("884")
		const tokenHaiAcP = accounts[2]
		const amounttsuMb2Q = BigInt("1005")
		const whoKmxaJmP = "0x0000000000000000000000000000000000000001"
		const tokenpLt0DwR = accounts[5]
		const amountjdf6Ftk = BigInt("191")
		const tokennPaLJHN = accounts[0]
		const amount4PMZmD = BigInt("510")
		const tokenalknJ0x = accounts[1]
		await contractHRJBqmx.withdraw.call(tokenHaiAcP, amountkUlDQxE, {from: accounts[1]});
		await contractHRJBqmx.borrowFor.call(tokenpLt0DwR, whoKmxaJmP, amounttsuMb2Q, {from: "0x0000000000000000000000000000000000000001"});
		await contractHRJBqmx.repay.call(tokennPaLJHN, amountjdf6Ftk, {from: accounts[2]});
		await contractHRJBqmx.borrow.call(tokenalknJ0x, amount4PMZmD, {from: accounts[4]});

		await expect(contractHRJBqmx.withdraw.call(tokenHaiAcP, amountkUlDQxE, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractwkGFpH3 = await Bank.new({from: accounts[1]});
		const amountXwWm8Tb = BigInt("67")
		const tokenSOI9Nb = accounts[0]
		const amountDVJ440S = BigInt("1461")
		const tokenwINw4KY = "0x0000000000000000000000000000000000000001"
		await contractwkGFpH3.deposit.call(tokenSOI9Nb, amountXwWm8Tb, {from: accounts[5]});
		await contractwkGFpH3.withdraw.call(tokenwINw4KY, amountDVJ440S, {from: accounts[1]});

		await expect(contractwkGFpH3.deposit.call(tokenSOI9Nb, amountXwWm8Tb, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractNntXBNd = await Bank.new({from: accounts[4]});
		const borrowergU0Qtpf = accounts[0]
		const amountxv0qTLY = BigInt("704")
		const tokenyo8zChZ = "0x0000000000000000000000000000000000000001"
		const amountrjxaECf = BigInt("292")
		const tokenzl1xSFa = accounts[3]
		await contractNntXBNd.addBorrower.call(borrowergU0Qtpf, {from: accounts[4]});
		await contractNntXBNd.repay.call(tokenyo8zChZ, amountxv0qTLY, {from: accounts[4]});
		await contractNntXBNd.repay.call(tokenzl1xSFa, amountrjxaECf, {from: accounts[1]});

		await expect(contractNntXBNd.addBorrower.call(borrowergU0Qtpf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractqxPZR6 = await Bank.new({from: accounts[4]});
		const borrowerSQEpf0q = accounts[5]
		const borrowerCxMOnIY = accounts[4]
		const borrowero573CtX = accounts[5]
		await contractqxPZR6.removeBorrower.call(borrowerSQEpf0q, {from: accounts[4]});
		await contractqxPZR6.removeBorrower.call(borrowerCxMOnIY, {from: accounts[2]});
		await contractqxPZR6.removeBorrower.call(borrowero573CtX, {from: accounts[3]});

		await expect(contractqxPZR6.removeBorrower.call(borrowerSQEpf0q, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractDU4Yz7 = await Bank.new({from: "0x0000000000000000000000000000000000000001"});
		const amountiv9sx9S = BigInt("958")
		const whohfNuPG0 = accounts[2]
		const tokenFtn4paT = accounts[4]
		const amountW1IsLV = BigInt("1999")
		const tokenZA3zaA2 = "0x0000000000000000000000000000000000000001"
		const amountySPoDp4 = BigInt("288")
		const tokenmSgL7pQ = accounts[4]
		const amountjHHz1bx = BigInt("1164")
		const tokenfbwbByu = accounts[0]
		const amountrYkSr6 = BigInt("831")
		const tokenr6XHfkS = accounts[2]
		await contractDU4Yz7.borrowFor.call(tokenFtn4paT, whohfNuPG0, amountiv9sx9S, {from: accounts[0]});
		await contractDU4Yz7.repay.call(tokenZA3zaA2, amountW1IsLV, {from: accounts[4]});
		await contractDU4Yz7.withdraw.call(tokenmSgL7pQ, amountySPoDp4, {from: "0x0000000000000000000000000000000000000001"});
		await contractDU4Yz7.borrow.call(tokenfbwbByu, amountjHHz1bx, {from: "0x0000000000000000000000000000000000000001"});
		await contractDU4Yz7.borrow.call(tokenr6XHfkS, amountrYkSr6, {from: accounts[5]});
	});

	it('test for Bank', async () => {
		const contract27ooJT = await Bank.new({from: accounts[4]});
		const tokenubTyYbA = "0x0000000000000000000000000000000000000000"
		const borrowerYqun5KR = accounts[5]
		const balanceojEZ1EB = await contract27ooJT.totalSupplyOf.call(tokenubTyYbA, {from: accounts[3]});
		await contract27ooJT.removeBorrower.call(borrowerYqun5KR, {from: accounts[3]});

		assert.equal(balanceojEZ1EB, 0)
		await expect(contract27ooJT.removeBorrower.call(borrowerYqun5KR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})