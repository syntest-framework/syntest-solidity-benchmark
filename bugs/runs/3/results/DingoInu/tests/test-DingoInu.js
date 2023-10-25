const DingoInu = artifacts.require("DingoInu");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DingoInu', (accounts) => {
	it('test for DingoInu', async () => {
		const contractTbItZAO = await DingoInu.new({from: accounts[4]});
		const spenderY87TYVs = accounts[2]
		const tokenOwnerI1OCzbf = accounts[2]
		const tokensmTKukSW = BigInt("2023")
		const tolAOgB6R = accounts[2]
		const fromdXxTZQg = accounts[4]
		const tokensjeTKI2z = BigInt("145")
		const spenderLGh0d6W = accounts[1]
		const spenderkzh1eoS = accounts[2]
		const tokenOwnerArUOSE = accounts[0]
		const spenderVKlC0i = accounts[0]
		const tokenOwnerHPnd6ZZ = accounts[5]
		const remainingzDsPLp6 = await contractTbItZAO.allowance.call(tokenOwnerI1OCzbf, spenderY87TYVs, {from: accounts[3]});
		const successh133IKs = await contractTbItZAO.transferFrom.call(fromdXxTZQg, tolAOgB6R, tokensmTKukSW, {from: accounts[1]});
		const successa8JANld = await contractTbItZAO.approve.call(spenderLGh0d6W, tokensjeTKI2z, {from: accounts[3]});
		const remainingN3SYVty = await contractTbItZAO.allowance.call(tokenOwnerArUOSE, spenderkzh1eoS, {from: accounts[5]});
		const remainingt57Or5 = await contractTbItZAO.allowance.call(tokenOwnerHPnd6ZZ, spenderVKlC0i, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(remainingzDsPLp6, 0)
		await expect(contractTbItZAO.transferFrom.call(fromdXxTZQg, tolAOgB6R, tokensmTKukSW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractvinYIgy = await DingoInu.new({from: accounts[3]});
		const tokenOwnerfT9KvuY = "0x0000000000000000000000000000000000000001"
		const tokensGagG2uu = BigInt("985")
		const toBgGsfQR = accounts[1]
		const balanceZuyXFvD = await contractvinYIgy.balanceOf.call(tokenOwnerfT9KvuY, {from: accounts[3]});
		const successAa855bP = await contractvinYIgy.transfer.call(toBgGsfQR, tokensGagG2uu, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(balanceZuyXFvD, 0)
		await expect(contractvinYIgy.transfer.call(toBgGsfQR, tokensGagG2uu, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contracthHdD8M8 = await DingoInu.new({from: accounts[2]});
		const spenderf59RpXu = accounts[1]
		const tokenOwnerrjJuaN = accounts[3]
		const tokenswKRepa = BigInt("613")
		const totWOxJGf = accounts[2]
		const remaininggU3oer = await contracthHdD8M8.allowance.call(tokenOwnerrjJuaN, spenderf59RpXu, {from: accounts[3]});
		const nullQOTa9r9 = await contracthHdD8M8.totalSupply.call({from: accounts[1]});
		const success63Jn70 = await contracthHdD8M8.transfer.call(totWOxJGf, tokenswKRepa, {from: accounts[3]});

		assert.equal(nullQOTa9r9, 1000000000000000000000000000000)
		assert.equal(remaininggU3oer, 0)
		await expect(contracthHdD8M8.transfer.call(totWOxJGf, tokenswKRepa, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractj3bkvPY = await DingoInu.new({from: accounts[3]});
		const tokensWKSThbt = BigInt("1540")
		const spenderd9QWqjH = accounts[0]
		const spenderIVSRMDS = accounts[5]
		const tokenOwnerjzlRCA5 = accounts[3]
		const tokenOwnerZzpknHZ = accounts[1]
		const tokenstv5g62e = BigInt("930")
		const toloZ9lbA = accounts[4]
		const successkpqa7kS = await contractj3bkvPY.approve.call(spenderd9QWqjH, tokensWKSThbt, {from: accounts[3]});
		const remainingtMmIL62 = await contractj3bkvPY.allowance.call(tokenOwnerjzlRCA5, spenderIVSRMDS, {from: accounts[1]});
		const balanceZsGVXA = await contractj3bkvPY.balanceOf.call(tokenOwnerZzpknHZ, {from: accounts[4]});
		const success4iFVCA = await contractj3bkvPY.transfer.call(toloZ9lbA, tokenstv5g62e, {from: accounts[0]});

		assert.equal(balanceZsGVXA, 0)
		assert.equal(remainingtMmIL62, 0)
		assert.equal(successkpqa7kS, true)
		await expect(contractj3bkvPY.transfer.call(toloZ9lbA, tokenstv5g62e, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractUInW26S = await DingoInu.new({from: accounts[0]});
		const tokenOwnerYeZHfLN = accounts[4]
		const tokensyIsJ4al = BigInt("1144")
		const toZe3VV4t = accounts[4]
		const tokensFu8xQXD = BigInt("1296")
		const to3GRtp6 = accounts[0]
		const tokensTvTg7BX = BigInt("653")
		const spendernSbEsSW = "0x0000000000000000000000000000000000000001"
		const tokensS1Cutue = BigInt("1211")
		const tovZKpmmc = accounts[0]
		const spendercjP4SJw = accounts[4]
		const tokenOwnerXXrzqoW = accounts[2]
		const balanceL2qDCJl = await contractUInW26S.balanceOf.call(tokenOwnerYeZHfLN, {from: accounts[4]});
		const successzX7bD6q = await contractUInW26S.transfer.call(toZe3VV4t, tokensyIsJ4al, {from: accounts[0]});
		const successcGRa825 = await contractUInW26S.transfer.call(to3GRtp6, tokensFu8xQXD, {from: accounts[4]});
		const successEBJsyeH = await contractUInW26S.approve.call(spendernSbEsSW, tokensTvTg7BX, {from: "0x0000000000000000000000000000000000000001"});
		const successYeLx421 = await contractUInW26S.transfer.call(tovZKpmmc, tokensS1Cutue, {from: accounts[4]});
		const remaininguJbascU = await contractUInW26S.allowance.call(tokenOwnerXXrzqoW, spendercjP4SJw, {from: accounts[5]});

		assert.equal(balanceL2qDCJl, 0)
		assert.equal(successzX7bD6q, true)
		await expect(contractUInW26S.transfer.call(to3GRtp6, tokensFu8xQXD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractd8DT7GW = await DingoInu.new({from: "0x0000000000000000000000000000000000000001"});
		const tokensNdk5AZN = BigInt("654")
		const spenderv5da6ky = accounts[0]
		const tokensuOG0RZ = BigInt("1424")
		const tohnsN5H = accounts[3]
		const successGpCwECy = await contractd8DT7GW.approve.call(spenderv5da6ky, tokensNdk5AZN, {from: accounts[3]});
		const successeXaIR93 = await contractd8DT7GW.transfer.call(tohnsN5H, tokensuOG0RZ, {from: accounts[4]});
	});
})