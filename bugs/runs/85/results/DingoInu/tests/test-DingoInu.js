const DingoInu = artifacts.require("DingoInu");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DingoInu', (accounts) => {
	it('test for DingoInu', async () => {
		const contractqlqih4m = await DingoInu.new({from: "0x0000000000000000000000000000000000000001"});
		const tokensBIgHyGq = BigInt("1747")
		const toohO77ON = accounts[2]
		const fromxJJBkLb = accounts[5]
		const tokenOwnerXVOXU0V = accounts[0]
		const tokensXYLY1eX = BigInt("1403")
		const toYiIScmh = accounts[0]
		const tokenOwnerjzekIn = accounts[1]
		const nulldm8TrPf = await contractqlqih4m.totalSupply.call({from: accounts[0]});
		const successB43rcwf = await contractqlqih4m.transferFrom.call(fromxJJBkLb, toohO77ON, tokensBIgHyGq, {from: accounts[1]});
		const balanceTw8oEGx = await contractqlqih4m.balanceOf.call(tokenOwnerXVOXU0V, {from: accounts[2]});
		const successAkcuhxM = await contractqlqih4m.transfer.call(toYiIScmh, tokensXYLY1eX, {from: accounts[5]});
		const balanceVVFSVpg = await contractqlqih4m.balanceOf.call(tokenOwnerjzekIn, {from: accounts[0]});
	});

	it('test for DingoInu', async () => {
		const contractX6dLLHl = await DingoInu.new({from: accounts[5]});
		const spendern5Omxe2 = "0x0000000000000000000000000000000000000001"
		const tokenOwnerdZQKqXe = accounts[1]
		const tokensRbG04bC = BigInt("1966")
		const toVGWCfXr = accounts[2]
		const fromjfXb9p0 = accounts[5]
		const tokenOwnergYSAMWk = accounts[4]
		const spenderZxjLuKV = accounts[3]
		const tokenOwneru6OlLs4 = accounts[3]
		const remainingUKiqKjW = await contractX6dLLHl.allowance.call(tokenOwnerdZQKqXe, spendern5Omxe2, {from: accounts[5]});
		const successuLf15SS = await contractX6dLLHl.transferFrom.call(fromjfXb9p0, toVGWCfXr, tokensRbG04bC, {from: accounts[2]});
		const balanceKMEZpP = await contractX6dLLHl.balanceOf.call(tokenOwnergYSAMWk, {from: "0x0000000000000000000000000000000000000001"});
		const remainingVJKfHHd = await contractX6dLLHl.allowance.call(tokenOwneru6OlLs4, spenderZxjLuKV, {from: accounts[3]});

		assert.equal(remainingUKiqKjW, 0)
		await expect(contractX6dLLHl.transferFrom.call(fromjfXb9p0, toVGWCfXr, tokensRbG04bC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contracttnFODAo = await DingoInu.new({from: accounts[1]});
		const tokensrUvfCPR = BigInt("558")
		const spender0pmEyj = "0x0000000000000000000000000000000000000001"
		const spenderDWnoXg = accounts[4]
		const tokenOwnerRCI1AEV = accounts[3]
		const tokensBojjLS = BigInt("139")
		const toWp5dKu7 = accounts[2]
		const tokensur8LEA = BigInt("342")
		const togNmt5m = accounts[2]
		const spenderTvRlZXo = "0x0000000000000000000000000000000000000001"
		const tokenOwnerAtfPMqp = accounts[1]
		const successfkvLeAg = await contracttnFODAo.approve.call(spender0pmEyj, tokensrUvfCPR, {from: accounts[2]});
		const remainingDK4rZYl = await contracttnFODAo.allowance.call(tokenOwnerRCI1AEV, spenderDWnoXg, {from: accounts[3]});
		const successk28P96T = await contracttnFODAo.transfer.call(toWp5dKu7, tokensBojjLS, {from: accounts[0]});
		const successEes4kO = await contracttnFODAo.transfer.call(togNmt5m, tokensur8LEA, {from: accounts[2]});
		const remaining1nETFf = await contracttnFODAo.allowance.call(tokenOwnerAtfPMqp, spenderTvRlZXo, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(remainingDK4rZYl, 0)
		assert.equal(successfkvLeAg, true)
		await expect(contracttnFODAo.transfer.call(toWp5dKu7, tokensBojjLS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractsMmmmbM = await DingoInu.new({from: accounts[2]});
		const tokenspr5FP7R = BigInt("1619")
		const spenderQRMbH5t = accounts[4]
		const tokensVA7fGCM = BigInt("362")
		const spenderBXvreFR = accounts[1]
		const tokensjN97jLr = BigInt("1471")
		const towIOjJut = "0x0000000000000000000000000000000000000001"
		const nullcpHFJBf = await contractsMmmmbM.totalSupply.call({from: accounts[2]});
		const successEQkT1Dp = await contractsMmmmbM.approve.call(spenderQRMbH5t, tokenspr5FP7R, {from: accounts[4]});
		const successMy8QW68 = await contractsMmmmbM.approve.call(spenderBXvreFR, tokensVA7fGCM, {from: accounts[3]});
		const successY3bDTNF = await contractsMmmmbM.transfer.call(towIOjJut, tokensjN97jLr, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullcpHFJBf, 1000000000000000000000000000000)
		assert.equal(successEQkT1Dp, true)
		assert.equal(successMy8QW68, true)
		await expect(contractsMmmmbM.transfer.call(towIOjJut, tokensjN97jLr, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractUkPgkTj = await DingoInu.new({from: accounts[2]});
		const tokenOwnerthcXqKX = accounts[1]
		const spenderpXI1wN9 = accounts[3]
		const tokenOwnerJvMnozs = accounts[2]
		const tokensTouk6IC = BigInt("331")
		const spenderqcm9xol = accounts[3]
		const tokensM4OdSAx = BigInt("510")
		const spenderbeRxUzV = accounts[4]
		const balanceWzbCfdX = await contractUkPgkTj.balanceOf.call(tokenOwnerthcXqKX, {from: "0x0000000000000000000000000000000000000001"});
		const remaininglLndo5S = await contractUkPgkTj.allowance.call(tokenOwnerJvMnozs, spenderpXI1wN9, {from: accounts[3]});
		const successx266ei8 = await contractUkPgkTj.approve.call(spenderqcm9xol, tokensTouk6IC, {from: "0x0000000000000000000000000000000000000001"});
		const successUISPCWA = await contractUkPgkTj.approve.call(spenderbeRxUzV, tokensM4OdSAx, {from: accounts[2]});

		assert.equal(balanceWzbCfdX, 0)
		assert.equal(remaininglLndo5S, 0)
		assert.equal(successUISPCWA, true)
		assert.equal(successx266ei8, true)
	});

	it('test for DingoInu', async () => {
		const contractAetuMUQ = await DingoInu.new({from: accounts[5]});
		const tokenseGePsqt = BigInt("689")
		const toeAHDj7d = accounts[4]
		const tokensxbrChXc = BigInt("1701")
		const toc5yLUR = accounts[2]
		const tokensluXdrOa = BigInt("1290")
		const spenderTxbYkec = accounts[0]
		const successSJsLh8z = await contractAetuMUQ.transfer.call(toeAHDj7d, tokenseGePsqt, {from: accounts[5]});
		const successluTOEED = await contractAetuMUQ.transfer.call(toc5yLUR, tokensxbrChXc, {from: accounts[1]});
		const successJ1x5PC0 = await contractAetuMUQ.approve.call(spenderTxbYkec, tokensluXdrOa, {from: accounts[2]});

		assert.equal(successSJsLh8z, true)
		await expect(contractAetuMUQ.transfer.call(toc5yLUR, tokensxbrChXc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})