const SALESCONTRACT = artifacts.require("SALESCONTRACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SALESCONTRACT', (accounts) => {
	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTx0QzKXq = await SALESCONTRACT.new({from: accounts[1]});
		const uintzX1mHli = BigInt("166")
		const uintyWbaep = BigInt("1373")
		const addressWhFfIGk = accounts[3]
		const uintzPUgy9d = await SALESCONTRACTx0QzKXq._setStage.call(uintzX1mHli, {from: accounts[2]});
		await SALESCONTRACTx0QzKXq.clearETH.call({from: accounts[0]});
		const addressL8U0sQf = await SALESCONTRACTx0QzKXq._setSalesPool.call(addressWhFfIGk, uintyWbaep, {from: accounts[5]});

		await expect(SALESCONTRACTx0QzKXq._setStage.call(uintzX1mHli, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTKDnbpbG = await SALESCONTRACT.new({from: accounts[4]});
		const addresswQc7Nae = accounts[4]
		const uinteasyDem = BigInt("351")
		const addressasy7fln = accounts[4]
		const addressRCZgA6 = accounts[3]
		const uintYpphsyS = BigInt("20")
		const addressIgAJ4I = accounts[4]
		const boolkWztnwd = await SALESCONTRACTKDnbpbG.tokenSale.call(addresswQc7Nae, {from: accounts[0]});
		const addressw3dZdIA = await SALESCONTRACTKDnbpbG._setSalesPool.call(addressasy7fln, uinteasyDem, {from: accounts[0]});
		const addressnHiilgC = await SALESCONTRACTKDnbpbG.setToken.call(addressRCZgA6, {from: accounts[0]});
		const addressIZaC9FZ = await SALESCONTRACTKDnbpbG._setSalesPool.call(addressIgAJ4I, uintYpphsyS, {from: accounts[3]});

		await expect(SALESCONTRACTKDnbpbG.tokenSale.call(addresswQc7Nae, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTP9nI4GG = await SALESCONTRACT.new({from: accounts[1]});
		const uintnFF3ZG6 = BigInt("391")
		const addressOMUsADI = accounts[5]
		const addressW1BMmmj = accounts[5]
		const addressOasF3A = await SALESCONTRACTP9nI4GG._setSalesPool.call(addressOMUsADI, uintnFF3ZG6, {from: accounts[1]});
		await SALESCONTRACTP9nI4GG.clearETH.call({from: accounts[5]});
		const boolYIMdtYJ = await SALESCONTRACTP9nI4GG.tokenSale.call(addressW1BMmmj, {from: accounts[0]});

		await expect(SALESCONTRACTP9nI4GG.clearETH.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTGBJl9UI = await SALESCONTRACT.new({from: accounts[3]});
		const addressptbWukO = accounts[0]
		const addressdi8f9pV = accounts[4]
		const addressITIcG5 = accounts[0]
		await SALESCONTRACTGBJl9UI.clearTokens.call({from: accounts[3]});
		const boolwo3MuwF = await SALESCONTRACTGBJl9UI.tokenSale.call(addressptbWukO, {from: accounts[5]});
		await SALESCONTRACTGBJl9UI.ff.call({from: accounts[3]});
		const booltC8rRZC = await SALESCONTRACTGBJl9UI.tokenSale.call(addressdi8f9pV, {from: accounts[4]});
		await SALESCONTRACTGBJl9UI.clearTokens.call({from: accounts[4]});
		const addressr6vwjzR = await SALESCONTRACTGBJl9UI.setToken.call(addressITIcG5, {from: accounts[2]});

		await expect(SALESCONTRACTGBJl9UI.clearTokens.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTzcAPHCA = await SALESCONTRACT.new({from: accounts[4]});
		const addressEW8vLKX = "0x0000000000000000000000000000000000000001"
		const uintcVCLt4t = BigInt("62")
		const addressWptfbEA = accounts[2]
		const addressxxaXMoE = accounts[0]
		const addressWI2mddH = accounts[1]
		const addressOlavVJX = await SALESCONTRACTzcAPHCA.setToken.call(addressEW8vLKX, {from: accounts[4]});
		const addresshbxtS5H = await SALESCONTRACTzcAPHCA._setSalesPool.call(addressWptfbEA, uintcVCLt4t, {from: accounts[3]});
		const boolda09tXX = await SALESCONTRACTzcAPHCA.tokenSale.call(addressxxaXMoE, {from: accounts[1]});
		await SALESCONTRACTzcAPHCA.clearTokens.call({from: accounts[3]});
		await SALESCONTRACTzcAPHCA.ff.call({from: accounts[2]});
		const boolHxDiqSx = await SALESCONTRACTzcAPHCA.tokenSale.call(addressWI2mddH, {from: accounts[2]});

		await expect(SALESCONTRACTzcAPHCA._setSalesPool.call(addressWptfbEA, uintcVCLt4t, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTprWDXPR = await SALESCONTRACT.new({from: accounts[0]});
		await SALESCONTRACTprWDXPR.clearETH.call({from: accounts[0]});
		await SALESCONTRACTprWDXPR.clearETH.call({from: accounts[3]});

		await expect(SALESCONTRACTprWDXPR.clearETH.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTzcAPHCA = await SALESCONTRACT.new({from: accounts[4]});
		const uintaYofgDi = BigInt("1264")
		const addressvLX9HzH = accounts[3]
		const uintU0qISQb = BigInt("62")
		const addressdBBVwFd = accounts[2]
		const addressCQURLhU = accounts[0]
		await SALESCONTRACTzcAPHCA.ff.call({from: accounts[5]});
		const addressdiG7hUh = await SALESCONTRACTzcAPHCA._setSalesPool.call(addressvLX9HzH, uintaYofgDi, {from: accounts[2]});
		const addresshbxtS5H = await SALESCONTRACTzcAPHCA._setSalesPool.call(addressdBBVwFd, uintU0qISQb, {from: accounts[3]});
		const boolHxDiqSx = await SALESCONTRACTzcAPHCA.tokenSale.call(addressCQURLhU, {from: accounts[2]});

		await expect(SALESCONTRACTzcAPHCA.ff.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTzcAPHCA = await SALESCONTRACT.new({from: accounts[4]});
		const uintziSZcqm = BigInt("258")
		const uintpywVHJV = BigInt("62")
		const addressU6EnH7 = accounts[2]
		const addressGZdYAAJ = accounts[0]
		const uintzQMu5ht = await SALESCONTRACTzcAPHCA._setStage.call(uintziSZcqm, {from: accounts[4]});
		const addresshbxtS5H = await SALESCONTRACTzcAPHCA._setSalesPool.call(addressU6EnH7, uintpywVHJV, {from: accounts[3]});
		const boolHxDiqSx = await SALESCONTRACTzcAPHCA.tokenSale.call(addressGZdYAAJ, {from: accounts[2]});

		await expect(SALESCONTRACTzcAPHCA._setSalesPool.call(addressU6EnH7, uintpywVHJV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTkwUumHy = await SALESCONTRACT.new({from: "0x0000000000000000000000000000000000000001"});
		const uinteKtPyA9 = BigInt("181")
		const addressYjU3ExR = accounts[0]
		const uintLjS2fIG = BigInt("675")
		const addressT5EtMXi = accounts[4]
		const uintgeY9dJm = BigInt("1140")
		const addressNP5aIQ3 = await SALESCONTRACTkwUumHy._setSalesPool.call(addressYjU3ExR, uinteKtPyA9, {from: accounts[3]});
		const addressAPZMW5K = await SALESCONTRACTkwUumHy._setSalesPool.call(addressT5EtMXi, uintLjS2fIG, {from: accounts[0]});
		const uintS4FPlk = await SALESCONTRACTkwUumHy._setStage.call(uintgeY9dJm, {from: accounts[3]});
		await SALESCONTRACTkwUumHy.clearTokens.call({from: accounts[3]});
		await SALESCONTRACTkwUumHy.clearTokens.call({from: accounts[1]});
	});
})