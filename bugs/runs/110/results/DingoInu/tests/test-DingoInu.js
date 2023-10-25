const DingoInu = artifacts.require("DingoInu");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DingoInu', (accounts) => {
	it('test for DingoInu', async () => {
		const contractUN1NAZ = await DingoInu.new({from: accounts[4]});
		const tokensKqCv5e = BigInt("171")
		const toLlbivqt = accounts[0]
		const fromi8IK5tD = accounts[4]
		const tokenswzc8Bcv = BigInt("1199")
		const togh1oxgw = accounts[2]
		const tokensBKDTOq4 = BigInt("1707")
		const toyREPnsk = accounts[4]
		const successHzRknh7 = await contractUN1NAZ.transferFrom.call(fromi8IK5tD, toLlbivqt, tokensKqCv5e, {from: accounts[5]});
		const successa3VAyZ6 = await contractUN1NAZ.transfer.call(togh1oxgw, tokenswzc8Bcv, {from: accounts[2]});
		const successmPtkvfC = await contractUN1NAZ.transfer.call(toyREPnsk, tokensBKDTOq4, {from: accounts[4]});

		await expect(contractUN1NAZ.transferFrom.call(fromi8IK5tD, toLlbivqt, tokensKqCv5e, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractPYeWQUL = await DingoInu.new({from: accounts[0]});
		const tokensJSqpljk = BigInt("1669")
		const spenderLLFRlrV = "0x0000000000000000000000000000000000000001"
		const tokensdGOkOpo = BigInt("1338")
		const spenderiQPuKJd = accounts[1]
		const tokensU4pIScm = BigInt("682")
		const toWMRO5AM = accounts[2]
		const spenderSCro8B3 = accounts[1]
		const tokenOwnerM58q9Tu = accounts[1]
		const tokenOwnerFTEgqH8 = accounts[1]
		const successdRY2Mqg = await contractPYeWQUL.approve.call(spenderLLFRlrV, tokensJSqpljk, {from: accounts[3]});
		const successQMF9v5S = await contractPYeWQUL.approve.call(spenderiQPuKJd, tokensdGOkOpo, {from: accounts[5]});
		const successUUqjmeI = await contractPYeWQUL.transfer.call(toWMRO5AM, tokensU4pIScm, {from: accounts[4]});
		const remainingUdpCkPO = await contractPYeWQUL.allowance.call(tokenOwnerM58q9Tu, spenderSCro8B3, {from: accounts[0]});
		const balancecd2kUlR = await contractPYeWQUL.balanceOf.call(tokenOwnerFTEgqH8, {from: accounts[2]});

		assert.equal(successQMF9v5S, true)
		assert.equal(successdRY2Mqg, true)
		await expect(contractPYeWQUL.transfer.call(toWMRO5AM, tokensU4pIScm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractzS9KZx1 = await DingoInu.new({from: accounts[3]});
		const spenderaNaP0K5 = accounts[0]
		const tokenOwnerAM2BwGi = "0x0000000000000000000000000000000000000001"
		const tokensKJspBX6 = BigInt("1821")
		const spenderypYmXal = accounts[5]
		const tokensqI2sYJ0 = BigInt("59")
		const tosXj08N = accounts[0]
		const fromC5wBUq7 = accounts[0]
		const tokensXBZ5H4d = BigInt("501")
		const toR30QpOO = accounts[1]
		const frompFD2J4 = accounts[0]
		const tokenOwnerKqzHUxH = accounts[1]
		const tokenOwnermxS5uWX = accounts[2]
		const remainingGGQUXL4 = await contractzS9KZx1.allowance.call(tokenOwnerAM2BwGi, spenderaNaP0K5, {from: accounts[3]});
		const successrGaUVai = await contractzS9KZx1.approve.call(spenderypYmXal, tokensKJspBX6, {from: accounts[3]});
		const successI1DXEdU = await contractzS9KZx1.transferFrom.call(fromC5wBUq7, tosXj08N, tokensqI2sYJ0, {from: accounts[5]});
		const successK5QnmDU = await contractzS9KZx1.transferFrom.call(frompFD2J4, toR30QpOO, tokensXBZ5H4d, {from: accounts[2]});
		const balanceobeHJ3C = await contractzS9KZx1.balanceOf.call(tokenOwnerKqzHUxH, {from: accounts[4]});
		const balanceMRQINMW = await contractzS9KZx1.balanceOf.call(tokenOwnermxS5uWX, {from: accounts[5]});

		assert.equal(remainingGGQUXL4, 0)
		assert.equal(successrGaUVai, true)
		await expect(contractzS9KZx1.transferFrom.call(fromC5wBUq7, tosXj08N, tokensqI2sYJ0, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractnJvaMC = await DingoInu.new({from: accounts[2]});
		const tokensx7y9h6O = BigInt("1513")
		const spenderfBGITwU = accounts[3]
		const successYtwGQzg = await contractnJvaMC.approve.call(spenderfBGITwU, tokensx7y9h6O, {from: accounts[4]});
		const nullUWK0yFj = await contractnJvaMC.totalSupply.call({from: accounts[4]});

		assert.equal(nullUWK0yFj, 1000000000000000000000000000000)
		assert.equal(successYtwGQzg, true)
	});

	it('test for DingoInu', async () => {
		const contract6awDtd = await DingoInu.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenOwnerObgycpY = accounts[3]
		const tokenskqGzvrz = BigInt("1899")
		const togBz4PbV = accounts[3]
		const fromnaHEdhJ = accounts[0]
		const balance0yBvOo = await contract6awDtd.balanceOf.call(tokenOwnerObgycpY, {from: accounts[4]});
		const successZM1Xb5A = await contract6awDtd.transferFrom.call(fromnaHEdhJ, togBz4PbV, tokenskqGzvrz, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for DingoInu', async () => {
		const contract2DAQj7 = await DingoInu.new({from: accounts[3]});
		const tokenOwnereTYjof8 = accounts[4]
		const tokens4UoevJ = BigInt("1923")
		const tolKIe6JU = accounts[2]
		const fromyiXLrO = accounts[5]
		const spenderZ8ZMuPv = accounts[3]
		const tokenOwnerhtluGfe = accounts[4]
		const tokensLe0P0a = BigInt("1478")
		const toUDr2HVV = accounts[3]
		const froms8FYXeB = accounts[3]
		const tokenOwnerY8Z5cz1 = accounts[1]
		const spendersjXfMkn = accounts[2]
		const tokenOwnerZ4M1gqI = accounts[3]
		const balanceXXhXXWp = await contract2DAQj7.balanceOf.call(tokenOwnereTYjof8, {from: accounts[0]});
		const successKvDKUnJ = await contract2DAQj7.transferFrom.call(fromyiXLrO, tolKIe6JU, tokens4UoevJ, {from: "0x0000000000000000000000000000000000000001"});
		const remainingFVSvZp7 = await contract2DAQj7.allowance.call(tokenOwnerhtluGfe, spenderZ8ZMuPv, {from: accounts[3]});
		const successJDq2sW4 = await contract2DAQj7.transferFrom.call(froms8FYXeB, toUDr2HVV, tokensLe0P0a, {from: accounts[1]});
		const balancePmTpNrg = await contract2DAQj7.balanceOf.call(tokenOwnerY8Z5cz1, {from: accounts[2]});
		const remainingGscHgy = await contract2DAQj7.allowance.call(tokenOwnerZ4M1gqI, spendersjXfMkn, {from: accounts[4]});

		assert.equal(balanceXXhXXWp, 0)
		await expect(contract2DAQj7.transferFrom.call(fromyiXLrO, tolKIe6JU, tokens4UoevJ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractddBuLwr = await DingoInu.new({from: accounts[2]});
		const tokensHIEfvi = BigInt("1846")
		const toIGhHx3R = accounts[4]
		const tokenOwnerjDXC7x = accounts[4]
		const tokensJytfmKi = BigInt("1281")
		const tolhTmz8F = accounts[0]
		const spenderJ2Kydbt = accounts[2]
		const tokenOwnerJOkoPRk = accounts[0]
		const successu655Z68 = await contractddBuLwr.transfer.call(toIGhHx3R, tokensHIEfvi, {from: accounts[2]});
		const balancevhfG7FM = await contractddBuLwr.balanceOf.call(tokenOwnerjDXC7x, {from: accounts[4]});
		const successwaPc1eQ = await contractddBuLwr.transfer.call(tolhTmz8F, tokensJytfmKi, {from: accounts[1]});
		const remainingo5b1dgP = await contractddBuLwr.allowance.call(tokenOwnerJOkoPRk, spenderJ2Kydbt, {from: accounts[5]});

		assert.equal(balancevhfG7FM, 0)
		assert.equal(successu655Z68, true)
		await expect(contractddBuLwr.transfer.call(tolhTmz8F, tokensJytfmKi, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})