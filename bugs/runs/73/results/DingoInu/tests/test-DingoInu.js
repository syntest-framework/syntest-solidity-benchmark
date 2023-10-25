const DingoInu = artifacts.require("DingoInu");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DingoInu', (accounts) => {
	it('test for DingoInu', async () => {
		const contractxzviNvb = await DingoInu.new({from: accounts[1]});
		const tokensihCbDfr = BigInt("54")
		const tod6JGZxw = accounts[5]
		const fromYkZG5l0 = "0x0000000000000000000000000000000000000001"
		const tokensaIOmQ2U = BigInt("335")
		const toAE7Uab5 = accounts[1]
		const spenderSqRHXV0 = accounts[4]
		const tokenOwnerJxQmEm2 = accounts[3]
		const tokensnvbyjfP = BigInt("151")
		const tojiEpuAF = accounts[2]
		const tokensCU1EkMn = BigInt("178")
		const toBQW43Yk = accounts[0]
		const successWQDwpSI = await contractxzviNvb.transferFrom.call(fromYkZG5l0, tod6JGZxw, tokensihCbDfr, {from: accounts[4]});
		const successc6OKXBE = await contractxzviNvb.transfer.call(toAE7Uab5, tokensaIOmQ2U, {from: accounts[1]});
		const remainingABN9B6 = await contractxzviNvb.allowance.call(tokenOwnerJxQmEm2, spenderSqRHXV0, {from: accounts[4]});
		const successp3ytELF = await contractxzviNvb.transfer.call(tojiEpuAF, tokensnvbyjfP, {from: accounts[0]});
		const successnfHDfoQ = await contractxzviNvb.transfer.call(toBQW43Yk, tokensCU1EkMn, {from: accounts[4]});

		await expect(contractxzviNvb.transferFrom.call(fromYkZG5l0, tod6JGZxw, tokensihCbDfr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractP3LTVst = await DingoInu.new({from: accounts[4]});
		const tokensjVAEp7S = BigInt("17")
		const spenderQ81D7r4 = accounts[0]
		const tokensUiOXpyb = BigInt("1754")
		const toOh27Vmr = accounts[5]
		const tokensPcqohOh = BigInt("1347")
		const tol1ACle9 = accounts[2]
		const tokensLBCBBLf = BigInt("226")
		const tok4xH6PA = accounts[1]
		const tokenOwnertbEth3r = accounts[0]
		const successDcNeUzd = await contractP3LTVst.approve.call(spenderQ81D7r4, tokensjVAEp7S, {from: accounts[1]});
		const successV64OaV5 = await contractP3LTVst.transfer.call(toOh27Vmr, tokensUiOXpyb, {from: accounts[0]});
		const successqGqiChA = await contractP3LTVst.transfer.call(tol1ACle9, tokensPcqohOh, {from: accounts[3]});
		const successtGCfdyy = await contractP3LTVst.transfer.call(tok4xH6PA, tokensLBCBBLf, {from: accounts[0]});
		const balanceFuB68y1 = await contractP3LTVst.balanceOf.call(tokenOwnertbEth3r, {from: accounts[0]});

		assert.equal(successDcNeUzd, true)
		await expect(contractP3LTVst.transfer.call(toOh27Vmr, tokensUiOXpyb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractdnydoXn = await DingoInu.new({from: accounts[0]});
		const tokensW0q8PpE = BigInt("334")
		const spenderX633xeZ = accounts[3]
		const tokenOwnerJ01j0I = accounts[1]
		const tokenOwneryub2gQx = accounts[3]
		const tokensbnoqrLH = BigInt("546")
		const spenderou60pbr = accounts[0]
		const tokensppgx4fB = BigInt("1126")
		const toQwihwc0 = accounts[0]
		const successz7CNtlG = await contractdnydoXn.approve.call(spenderX633xeZ, tokensW0q8PpE, {from: accounts[1]});
		const balanceNfqa3np = await contractdnydoXn.balanceOf.call(tokenOwnerJ01j0I, {from: accounts[2]});
		const balanceCn5Ywe9 = await contractdnydoXn.balanceOf.call(tokenOwneryub2gQx, {from: accounts[4]});
		const successsZbTCHN = await contractdnydoXn.approve.call(spenderou60pbr, tokensbnoqrLH, {from: accounts[1]});
		const successmHyAbup = await contractdnydoXn.transfer.call(toQwihwc0, tokensppgx4fB, {from: accounts[5]});

		assert.equal(balanceCn5Ywe9, 0)
		assert.equal(balanceNfqa3np, 0)
		assert.equal(successsZbTCHN, true)
		assert.equal(successz7CNtlG, true)
		await expect(contractdnydoXn.transfer.call(toQwihwc0, tokensppgx4fB, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractZuiz3c6 = await DingoInu.new({from: accounts[0]});
		const spenderZZs5MXW = accounts[2]
		const tokenOwnerSWlck3X = accounts[0]
		const tokenOwnerLIFwjew = accounts[5]
		const tokenOwnerpJvZhln = accounts[1]
		const remainings4CU6bw = await contractZuiz3c6.allowance.call(tokenOwnerSWlck3X, spenderZZs5MXW, {from: accounts[1]});
		const balanceuleto7J = await contractZuiz3c6.balanceOf.call(tokenOwnerLIFwjew, {from: accounts[5]});
		const nullf2urJa = await contractZuiz3c6.totalSupply.call({from: accounts[3]});
		const balancex86iGAB = await contractZuiz3c6.balanceOf.call(tokenOwnerpJvZhln, {from: accounts[1]});

		assert.equal(balanceuleto7J, 0)
		assert.equal(balancex86iGAB, 0)
		assert.equal(nullf2urJa, 1000000000000000000000000000000)
		assert.equal(remainings4CU6bw, 0)
	});

	it('test for DingoInu', async () => {
		const contract3V3daH = await DingoInu.new({from: accounts[3]});
		const tokenOwnerRmwawof = accounts[0]
		const tokens0WNsj3 = BigInt("0")
		const toFIcj78E = accounts[0]
		const balanceFw2Avpq = await contract3V3daH.balanceOf.call(tokenOwnerRmwawof, {from: "0x0000000000000000000000000000000000000001"});
		const successnLuefk1 = await contract3V3daH.transfer.call(toFIcj78E, tokens0WNsj3, {from: accounts[4]});

		assert.equal(balanceFw2Avpq, 0)
		assert.equal(successnLuefk1, true)
	});

	it('test for DingoInu', async () => {
		const contractolsr7W = await DingoInu.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenswUXtmLX = BigInt("864")
		const spenderiWDtyh = accounts[5]
		const successk19ssxK = await contractolsr7W.approve.call(spenderiWDtyh, tokenswUXtmLX, {from: accounts[1]});
		const nullx5tjr3W = await contractolsr7W.totalSupply.call({from: accounts[4]});
		const nullLTus31 = await contractolsr7W.totalSupply.call({from: accounts[5]});
	});
})