const OnXFinance = artifacts.require("OnXFinance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('OnXFinance', (accounts) => {
	it('test for OnXFinance', async () => {
		const stringj2ToJEK = "fpPGKfJjCXHItL5bSAhss0wUbgXNwLN4EvtX"
		const stringzAZrpT9 = "tOSEPuHKsmx3mmcFXCmSqWdVrBmSGrJocjKfpwFTtC9Ftam3yBdmMirFK38C3Q7Ba8wCTrNoyd5Q2y"
		const uintfyFisYu = BigInt("409")
		const OnXFinancehvrmFaq = await OnXFinance.new(stringj2ToJEK, stringzAZrpT9, uintfyFisYu, {from: accounts[1]});
		const uintrHwhdBn = BigInt("1988")
		const addressaFFKwq = accounts[1]
		const uintYAMwB6N = BigInt("137")
		const addressTBYLe5 = accounts[3]
		const uinttu6dGWN = BigInt("1384")
		const addressDOqBrqq = accounts[2]
		const addresssWnev2q = accounts[4]
		const stringREIrtBk = await OnXFinancehvrmFaq.name.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolOWMzbWL = await OnXFinancehvrmFaq.increaseAllowance.call(addressaFFKwq, uintrHwhdBn, {from: accounts[0]});
//		const boolBIKmSlC = await OnXFinancehvrmFaq.increaseAllowance.call(addressTBYLe5, uintYAMwB6N, {from: accounts[4]});
//		const boolcg6ydvO = await OnXFinancehvrmFaq.transferFrom.call(addresssWnev2q, addressDOqBrqq, uinttu6dGWN, {from: accounts[1]});

		assert.equal(stringREIrtBk, "fpPGKfJjCXHItL5bSAhss0wUbgXNwLN4EvtX")
		await expect(OnXFinancehvrmFaq.increaseAllowance.call(addressaFFKwq, uintrHwhdBn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringitwxsET = "wKHUvJtB56IlrAOVRTx3wK0rPSgqMTzfgl7WsVo"
		const stringutxV4OF = "kXJQltZQIXPn9nxs8a7QOZbg14uGzyowoSKPeUES9M0R69fjnv0l6V8nTEeMvewLeFg7nYFTBP2cY"
		const uintGLc4o0q = BigInt("23")
		const OnXFinanceJAI3jPp = await OnXFinance.new(stringitwxsET, stringutxV4OF, uintGLc4o0q, {from: accounts[4]});
		const uintNr3Nx0u = BigInt("173")
		const addressfvWOpid = accounts[2]
		const uintonA0SH6 = BigInt("873")
		const address6mfzVq = accounts[2]
		const uintl6TrT5 = BigInt("1670")
		const addressV3CuwzO = accounts[2]
		const boolU2pN9Rd = await OnXFinanceJAI3jPp.approve.call(addressfvWOpid, uintNr3Nx0u, {from: accounts[3]});
		const uint8tZcsb0f = await OnXFinanceJAI3jPp.decimals.call({from: accounts[2]});
//		const boolXq13k0 = await OnXFinanceJAI3jPp.transfer.call(address6mfzVq, uintonA0SH6, {from: accounts[2]});
//		const uint8tBxXjUT = await OnXFinanceJAI3jPp.decimals.call({from: accounts[3]});
//		const boolp0OBc6 = await OnXFinanceJAI3jPp.transfer.call(addressV3CuwzO, uintl6TrT5, {from: accounts[5]});

		assert.equal(boolU2pN9Rd, true)
		assert.equal(uint8tZcsb0f, BigInt("18"))
		await expect(OnXFinanceJAI3jPp.transfer.call(address6mfzVq, uintonA0SH6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringjbOC02J = "uVXkBk3fPPlznS"
		const stringk7mKEDw = "MEwpUkSeQXqHysqvA8TGRXq7251DAKr7wnx2aneLJRSLIyDhFlu1Qp5eZK4NFvi7NnTtxoz4na26hFh3"
		const uintTnzezNC = BigInt("1803")
		const OnXFinanceJrXltN = await OnXFinance.new(stringjbOC02J, stringk7mKEDw, uintTnzezNC, {from: accounts[3]});
		const uintl7daym = BigInt("1212")
		const addressWd93MiX = accounts[1]
		const uintXy0dETA = BigInt("1558")
		const addresst49MtUc = accounts[1]
		const boolVCvq8j = await OnXFinanceJrXltN.approve.call(addressWd93MiX, uintl7daym, {from: "0x0000000000000000000000000000000000000001"});
//		const boolzbhsIkd = await OnXFinanceJrXltN.approveAndCall.call(addresst49MtUc, uintXy0dETA, {from: accounts[5]});

		assert.equal(boolVCvq8j, true)
		await expect(OnXFinanceJrXltN.approveAndCall.call(addresst49MtUc, uintXy0dETA, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringkn7ficF = "WHDKACvoX5c7XCE5eBb65YYzKeLzRhGzjdDVhdjjFx0xTDsVkA9Tdh8t1NCSpoCOrab5RmK"
		const stringCTptQHF = "8UVnvMdtj47KIgqEHy3toP9fp0H3t3usvLlbfhvR195je"
		const uintHcqL5e = BigInt("254")
		const OnXFinanceqk8igWS = await OnXFinance.new(stringkn7ficF, stringCTptQHF, uintHcqL5e, {from: "0x0000000000000000000000000000000000000001"});
		const uintuxFhqeI = BigInt("1569")
		const addresswuC4FPH = accounts[4]
		const uinteStUtDD = BigInt("242")
		const addresslyctUVC = accounts[1]
		const uinti6XEJBt = BigInt("1139")
		const addresssGBpmGc = accounts[3]
		const boolkWRY0DX = await OnXFinanceqk8igWS.transfer.call(addresswuC4FPH, uintuxFhqeI, {from: accounts[2]});
		const stringZ6OhvXk = await OnXFinanceqk8igWS.symbol.call({from: accounts[4]});
		const boolpEyLwbT = await OnXFinanceqk8igWS.approveAndCall.call(addresslyctUVC, uinteStUtDD, {from: accounts[4]});
		const boolEhtibAw = await OnXFinanceqk8igWS.transfer.call(addresssGBpmGc, uinti6XEJBt, {from: accounts[1]});
	});

	it('test for OnXFinance', async () => {
		const stringgeePCIJ = "UlPEIr1xSk226bPivvozbsw14DeVByoCT2aDJOTorYq9wACsmyIw7qsBDldu5"
		const stringIX0Czo3 = "Fy5BC7yDUtrnmFNzcPxaD3bIXe5doUgfda36wjOMnciGb441BlsVJXNHpXGbsmzEliN3Oc0SvjuJKEigv7"
		const uintopnCuKP = BigInt("141")
		const OnXFinanceZ9kOFPG = await OnXFinance.new(stringgeePCIJ, stringIX0Czo3, uintopnCuKP, {from: accounts[2]});
		const addressZnE2eE = accounts[4]
		const uint88kXseW = await OnXFinanceZ9kOFPG.decimals.call({from: accounts[1]});
		const boolFak0x7M = await OnXFinanceZ9kOFPG.transferownership.call(addressZnE2eE, {from: accounts[2]});

		assert.equal(boolFak0x7M, true)
		assert.equal(uint88kXseW, BigInt("18"))
	});

	it('test for OnXFinance', async () => {
		const stringjbOC02J = "uVXkBk3fPPlznS"
		const stringk7mKEDw = "MEwpUkSeQXqHysqvA8TGRXq7251DAKr7wnx2aneLJRSLIyDhFlu1Qp5eZK4NFvi7NnTtxoz4na26hFh3"
		const uintdcxBjU6 = BigInt("1803")
		const OnXFinanceJrXltN = await OnXFinance.new(stringjbOC02J, stringk7mKEDw, uintdcxBjU6, {from: accounts[3]});
		const uintd2zwte9 = BigInt("1246")
		const addressiNkSgyR = accounts[0]
		const uintDAeNUbX = BigInt("1212")
		const addressd4oqmrW = accounts[2]
		const booliGov4dH = await OnXFinanceJrXltN.transfer.call(addressiNkSgyR, uintd2zwte9, {from: accounts[3]});
		const boolVCvq8j = await OnXFinanceJrXltN.approve.call(addressd4oqmrW, uintDAeNUbX, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolVCvq8j, true)
		assert.equal(booliGov4dH, true)
	});

	it('test for OnXFinance', async () => {
		const stringjbOC02J = "uVXkBk3fPPlznS"
		const stringk7mKEDw = "MEwpUkSeQXqHysqvA8TGRXq7251DAKr7wnx2aneLJRSLIyDhFlu1Qp5eZK4NFvi7NnTtxoz4na26hFh3"
		const uintfuqUMrq = BigInt("1803")
		const OnXFinanceJrXltN = await OnXFinance.new(stringjbOC02J, stringk7mKEDw, uintfuqUMrq, {from: accounts[3]});
		const uintZclPWHz = BigInt("0")
		const addressgdgQsc0 = accounts[4]
		const boolgI8394g = await OnXFinanceJrXltN.transfer.call(addressgdgQsc0, uintZclPWHz, {from: accounts[5]});

		assert.equal(boolgI8394g, true)
	});

	it('test for OnXFinance', async () => {
		const stringjbOC02J = "uVXkBk3fPPlznS"
		const stringk7mKEDw = "MEwpUkSeQXqHysqvA8TGRXq7251DAKr7wnx2aneLJRSLIyDhFlu1Qp5eZK4NFvi7NnTtxoz4na26hFh3"
		const uintgrMMO9p = BigInt("1803")
		const OnXFinanceJrXltN = await OnXFinance.new(stringjbOC02J, stringk7mKEDw, uintgrMMO9p, {from: accounts[3]});
		const uintqLlTrSo = BigInt("751")
		const addressQt0iz31 = accounts[4]
		const uintAVxSXbn = BigInt("1212")
		const addressPt1JvoK = accounts[2]
		const boolZ67Zc35 = await OnXFinanceJrXltN.approveAndCall.call(addressQt0iz31, uintqLlTrSo, {from: accounts[3]});
		const boolVCvq8j = await OnXFinanceJrXltN.approve.call(addressPt1JvoK, uintAVxSXbn, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolVCvq8j, true)
		assert.equal(boolZ67Zc35, true)
	});

	it('test for OnXFinance', async () => {
		const stringjbOC02J = "uVXkBk3fPPlznS"
		const stringk7mKEDw = "MEwpUkSeQXqHysqvA8TGRXq7251DAKr7wnx2aneLJRSLIyDhFlu1Qp5eZK4NFvi7NnTtxoz4na26hFh3"
		const uintNbhD6G = BigInt("1803")
		const OnXFinanceJrXltN = await OnXFinance.new(stringjbOC02J, stringk7mKEDw, uintNbhD6G, {from: accounts[3]});
		const uintlf8sSTc = BigInt("0")
		const addressDEBoWtm = accounts[4]
		const uintgzE3Ydy = BigInt("179")
		const addressnsMKHbo = accounts[3]
		const uinteZNP547 = BigInt("595")
		const addressqdSXQo = accounts[0]
		const boolY5SrKc6 = await OnXFinanceJrXltN.approveAndCall.call(addressDEBoWtm, uintlf8sSTc, {from: accounts[3]});
//		const boolFdxgnZQ = await OnXFinanceJrXltN.transfer.call(addressnsMKHbo, uintgzE3Ydy, {from: accounts[0]});
//		const boolONhHWlk = await OnXFinanceJrXltN.approve.call(addressqdSXQo, uinteZNP547, {from: accounts[4]});

		assert.equal(boolY5SrKc6, true)
		await expect(OnXFinanceJrXltN.transfer.call(addressnsMKHbo, uintgzE3Ydy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})