const Bank = artifacts.require("Bank");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Bank', (accounts) => {
	it('test for Bank', async () => {
		const contractv9koOl4 = await Bank.new({from: accounts[2]});
		const amountFn5VfjZ = BigInt("561")
		const tokenn4wS5wy = accounts[0]
		const amountgkT0IVV = BigInt("1587")
		const tokenemBROEg = accounts[3]
		const tokentUIoup = accounts[1]
		const amountexQ8xho = BigInt("451")
		const tokenrM2VRuh = accounts[3]
		await contractv9koOl4.withdraw.call(tokenn4wS5wy, amountFn5VfjZ, {from: accounts[3]});
		await contractv9koOl4.borrow.call(tokenemBROEg, amountgkT0IVV, {from: accounts[4]});
		const balanceoCJ4iat = await contractv9koOl4.totalSupplyOf.call(tokentUIoup, {from: accounts[5]});
		await contractv9koOl4.repay.call(tokenrM2VRuh, amountexQ8xho, {from: accounts[1]});

		await expect(contractv9koOl4.withdraw.call(tokenn4wS5wy, amountFn5VfjZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractdvUfkr9 = await Bank.new({from: accounts[4]});
		const amountIG5fb6S = BigInt("1206")
		const tokenRJVquQP = accounts[5]
		const amounte1fcnyD = BigInt("734")
		const tokenz6kNzxe = accounts[4]
		const amountB8TnKKc = BigInt("1828")
		const whoBQWPNC = accounts[3]
		const tokenD1gLcvM = accounts[2]
		const amountJ8bVdj = BigInt("1213")
		const tokenS9b4jaN = accounts[2]
		await contractdvUfkr9.repay.call(tokenRJVquQP, amountIG5fb6S, {from: accounts[4]});
		await contractdvUfkr9.withdraw.call(tokenz6kNzxe, amounte1fcnyD, {from: accounts[1]});
		await contractdvUfkr9.borrowFor.call(tokenD1gLcvM, whoBQWPNC, amountB8TnKKc, {from: accounts[0]});
		await contractdvUfkr9.repay.call(tokenS9b4jaN, amountJ8bVdj, {from: accounts[5]});

		await expect(contractdvUfkr9.repay.call(tokenRJVquQP, amountIG5fb6S, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractxQoox8N = await Bank.new({from: accounts[5]});
		const tokenBW22di = accounts[3]
		const amountkbv67k8 = BigInt("544")
		const tokenGFhXsZN = accounts[2]
		const amountpdXvbk = BigInt("357")
		const whoEqMePwl = accounts[4]
		const tokenVHknQsl = accounts[1]
		const amount0sP4PQ = BigInt("1040")
		const tokenWjEitkU = accounts[5]
		const balancesUhNe1y = await contractxQoox8N.totalSupplyOf.call(tokenBW22di, {from: accounts[3]});
		await contractxQoox8N.withdraw.call(tokenGFhXsZN, amountkbv67k8, {from: accounts[0]});
		await contractxQoox8N.borrowFor.call(tokenVHknQsl, whoEqMePwl, amountpdXvbk, {from: accounts[3]});
		await contractxQoox8N.repay.call(tokenWjEitkU, amount0sP4PQ, {from: accounts[2]});

		await expect(contractxQoox8N.totalSupplyOf.call(tokenBW22di, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractOuDSn9g = await Bank.new({from: accounts[1]});
		const amountnAO0Jav = BigInt("1251")
		const tokenltaPWSh = accounts[2]
		const amountZ1bSqDu = BigInt("882")
		const whoyyxCXfJ = accounts[5]
		const tokenkKI51fk = accounts[2]
		const amountMKw8XMx = BigInt("1087")
		const whoZiTFDiQ = accounts[1]
		const tokenJTHSFHQ = accounts[3]
		await contractOuDSn9g.withdraw.call(tokenltaPWSh, amountnAO0Jav, {from: accounts[1]});
		await contractOuDSn9g.borrowFor.call(tokenkKI51fk, whoyyxCXfJ, amountZ1bSqDu, {from: accounts[4]});
		await contractOuDSn9g.borrowFor.call(tokenJTHSFHQ, whoZiTFDiQ, amountMKw8XMx, {from: accounts[3]});

		await expect(contractOuDSn9g.withdraw.call(tokenltaPWSh, amountnAO0Jav, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractdZoK71F = await Bank.new({from: "0x0000000000000000000000000000000000000001"});
		const borroweraBPawkJ = accounts[2]
		const tokengo41zu2 = accounts[2]
		const amountKKGY4W = BigInt("91")
		const tokenw0RHwy3 = accounts[1]
		const amountid5XJh = BigInt("1924")
		const token8JmIAg = accounts[2]
		await contractdZoK71F.removeBorrower.call(borroweraBPawkJ, {from: accounts[0]});
		const balanceZKEpz6u = await contractdZoK71F.totalSupplyOf.call(tokengo41zu2, {from: accounts[1]});
		await contractdZoK71F.withdraw.call(tokenw0RHwy3, amountKKGY4W, {from: accounts[2]});
		await contractdZoK71F.withdraw.call(token8JmIAg, amountid5XJh, {from: accounts[4]});
	});

	it('test for Bank', async () => {
		const contracty2q5Z30 = await Bank.new({from: accounts[0]});
		const borrowerHUFHOcr = accounts[0]
		const amountl0g06r7 = BigInt("1159")
		const whonw2MrEe = accounts[0]
		const tokenn85mQda = accounts[0]
		const borrowernf5Jgqm = accounts[5]
		const amountaNQOU0 = BigInt("641")
		const tokenn0BNe5m = accounts[0]
		await contracty2q5Z30.removeBorrower.call(borrowerHUFHOcr, {from: accounts[0]});
		await contracty2q5Z30.borrowFor.call(tokenn85mQda, whonw2MrEe, amountl0g06r7, {from: "0x0000000000000000000000000000000000000001"});
		await contracty2q5Z30.removeBorrower.call(borrowernf5Jgqm, {from: accounts[5]});
		await contracty2q5Z30.deposit.call(tokenn0BNe5m, amountaNQOU0, {from: accounts[1]});

		await expect(contracty2q5Z30.removeBorrower.call(borrowerHUFHOcr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractyGQGnvo = await Bank.new({from: accounts[2]});
		const amountIaDjAgw = BigInt("1798")
		const tokencovwZJm = accounts[2]
		const amountLtRSGA = BigInt("1361")
		const tokenthgRDiT = accounts[0]
		const amountk3SIEeJ = BigInt("1562")
		const whoKBexbzt = accounts[0]
		const tokenaBMu8SV = accounts[0]
		const amountAZYHxTH = BigInt("132")
		const whobBIUCRI = accounts[1]
		const tokenhdL19Yg = accounts[3]
		await contractyGQGnvo.deposit.call(tokencovwZJm, amountIaDjAgw, {from: accounts[2]});
		await contractyGQGnvo.borrow.call(tokenthgRDiT, amountLtRSGA, {from: accounts[0]});
		await contractyGQGnvo.borrowFor.call(tokenaBMu8SV, whoKBexbzt, amountk3SIEeJ, {from: accounts[3]});
		await contractyGQGnvo.borrowFor.call(tokenhdL19Yg, whobBIUCRI, amountAZYHxTH, {from: accounts[1]});

		await expect(contractyGQGnvo.deposit.call(tokencovwZJm, amountIaDjAgw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractaPLmeJ = await Bank.new({from: accounts[5]});
		const borrowervPD2g1Q = accounts[4]
		const tokenHias9gC = accounts[3]
		const amountoT6fhpn = BigInt("1266")
		const tokenL0YqFxj = accounts[1]
		const amountYpzYYSt = BigInt("743")
		const tokeneUUJnC = accounts[4]
		await contractaPLmeJ.addBorrower.call(borrowervPD2g1Q, {from: accounts[5]});
		const balanceK4yQ1Ek = await contractaPLmeJ.totalSupplyOf.call(tokenHias9gC, {from: accounts[3]});
		await contractaPLmeJ.borrow.call(tokenL0YqFxj, amountoT6fhpn, {from: accounts[0]});
		await contractaPLmeJ.borrow.call(tokeneUUJnC, amountYpzYYSt, {from: accounts[3]});

		await expect(contractaPLmeJ.addBorrower.call(borrowervPD2g1Q, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contracti6Pwgl8 = await Bank.new({from: accounts[5]});
		const tokentPqHEd = "0x0000000000000000000000000000000000000000"
		const borrowergguxRLF = accounts[5]
		const amountrlpKUbk = BigInt("145")
		const tokendEHjEn = accounts[3]
		const amountBNHiccL = BigInt("1206")
		const token4kCDQ2 = "0x0000000000000000000000000000000000000001"
		const balanceV3bZpjx = await contracti6Pwgl8.totalSupplyOf.call(tokentPqHEd, {from: accounts[1]});
		await contracti6Pwgl8.addBorrower.call(borrowergguxRLF, {from: accounts[0]});
		await contracti6Pwgl8.withdraw.call(tokendEHjEn, amountrlpKUbk, {from: accounts[3]});
		await contracti6Pwgl8.withdraw.call(token4kCDQ2, amountBNHiccL, {from: accounts[2]});

		assert.equal(balanceV3bZpjx, 0)
		await expect(contracti6Pwgl8.addBorrower.call(borrowergguxRLF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})