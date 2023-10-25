const ANRXToken = artifacts.require("ANRXToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ANRXToken', (accounts) => {
	it('test for ANRXToken', async () => {
		const uintQeeMgY8 = BigInt("1325")
		const stringvbHcgt = "zILOxheJmAGomxXtInX5romJbGcTOrHiRYAVfPw39ctPzUqhZJN7p4MYPoEXQ7PQ3glai4kDV5qinH2mFzqHOF"
		const stringfPsGRVV = "Pp2hCIf547ntrGbji0ote59kL65o2GrPxN8pfb1Y9M52tmafz8j3KzDJySmvLOElKYo"
		const uintljW344O = BigInt("1289")
		const ANRXTokenKwrTVYM = await ANRXToken.new(uintQeeMgY8, stringvbHcgt, stringfPsGRVV, uintljW344O, {from: accounts[2]});
		const addressyIo5RWs = accounts[5]
		const addressCunOazG = accounts[2]
		const addressjfdOuo = "0x0000000000000000000000000000000000000001"
		const uintO7JuWWn = await ANRXTokenKwrTVYM.balanceOf.call(addressyIo5RWs, {from: "0x0000000000000000000000000000000000000001"});
		const addresspQ3RtjQ = await ANRXTokenKwrTVYM.deprecate.call(addressCunOazG, {from: accounts[2]});
		const addressREm7EjO = await ANRXTokenKwrTVYM.deprecate.call(addressjfdOuo, {from: accounts[4]});

		assert.equal(uintO7JuWWn, BigInt("0"))
		await expect(ANRXTokenKwrTVYM.deprecate.call(addressjfdOuo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintBZZQBqa = BigInt("844")
		const stringvQJCqPh = "vLpaTMRkjmThlsUhsqlpMnUoTecjLDM9RCjRIolH2og2EUhunogx64h2v5"
		const stringexGIzNQ = "BbPaylbL2ozIdANRt8owJfRCT1uBEOS25YH45gg3Ua"
		const uintdGIJeJZ = BigInt("1692")
		const ANRXTokeniW2auA1 = await ANRXToken.new(uintBZZQBqa, stringvQJCqPh, stringexGIzNQ, uintdGIJeJZ, {from: "0x0000000000000000000000000000000000000001"});
		const addressyVDURqF = accounts[1]
		const addresskz6phI3 = accounts[4]
		const uinttxTacAH = BigInt("1220")
		const addressSwQLfEF = accounts[2]
		const uintNy6FF7q = BigInt("676")
		const uintLPSv1c3 = BigInt("500")
		const addressqbSIm3v = accounts[5]
		const uintO8DP7oA = BigInt("1207")
		const uintHlqRFaB = BigInt("1574")
		const uintCZUgtbK = await ANRXTokeniW2auA1.allowance.call(addresskz6phI3, addressyVDURqF, {from: accounts[4]});
		const boolZ9kY5Dt = await ANRXTokeniW2auA1.transfer.call(addressSwQLfEF, uinttxTacAH, {from: accounts[3]});
		const uintQmJdKpA = await ANRXTokeniW2auA1.totalSupply.call({from: accounts[4]});
		const uintaTJKtL = await ANRXTokeniW2auA1.issue.call(uintNy6FF7q, {from: accounts[0]});
		const boolbjPpLuS = await ANRXTokeniW2auA1.transfer.call(addressqbSIm3v, uintLPSv1c3, {from: accounts[3]});
		const uintPguLFF0 = await ANRXTokeniW2auA1.setParams.call(uintHlqRFaB, uintO8DP7oA, {from: accounts[4]});
	});

	it('test for ANRXToken', async () => {
		const uintHxhtQuC = BigInt("1517")
		const stringel6FHf5 = "zsYnhVp2UWyuRxN1SrAnM3StfB7T6B8FRBfNWKXwJJBwz4Rbe41lm1jdVBNzS6hFSsVW"
		const stringQGfCgdz = "YoxviYRmVxPjEpB5RPJ7RyISbaNgu6DMOgzFTMbNWwM4S5PtlhVf0lgLKvEdiYJEXlNF3XhW0rw"
		const uintyoKMYkv = BigInt("244")
		const ANRXTokenFbZoOJ5 = await ANRXToken.new(uintHxhtQuC, stringel6FHf5, stringQGfCgdz, uintyoKMYkv, {from: accounts[0]});
		const uintGOSqmm = BigInt("998")
		const addresstE8wno3 = accounts[4]
		const addressfbRzw6D = accounts[2]
		const addressLaryfho = accounts[3]
		const boolC6JHo01 = await ANRXTokenFbZoOJ5.approve.call(addresstE8wno3, uintGOSqmm, {from: accounts[3]});
		const addressQ02oig5 = await ANRXTokenFbZoOJ5.deprecate.call(addressfbRzw6D, {from: accounts[1]});
		const uintb9R4vbF = await ANRXTokenFbZoOJ5.balanceOf.call(addressLaryfho, {from: "0x0000000000000000000000000000000000000001"});
		const uintEbGEIUF = await ANRXTokenFbZoOJ5.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolC6JHo01, true)
		await expect(ANRXTokenFbZoOJ5.deprecate.call(addressfbRzw6D, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintqeBBTFC = BigInt("755")
		const stringTQNI3PT = "Qm4s7k1soJL5ydGCTaTdv7szRFl8g"
		const stringvyo8OC0 = "9mFzVFj7cQWINTPnjtySDKaAWsPGLM6282IpV66ebcMr0kHbz76qxVEXopsKX65JyI71TT2Vt153tNg"
		const uintLHry0vW = BigInt("712")
		const ANRXTokenr8SxjIt = await ANRXToken.new(uintqeBBTFC, stringTQNI3PT, stringvyo8OC0, uintLHry0vW, {from: accounts[4]});
		const uintCDQKcYa = BigInt("101")
		const addresskCO7Qji = "0x0000000000000000000000000000000000000001"
		const addressEHh5XnQ = accounts[1]
		const uintUPaBEk = BigInt("1752")
		const addressE81Sucw = accounts[3]
		const addressga3R5MT = accounts[0]
		const addressWjwWEFy = accounts[3]
		const addressYfY6r4C = "0x0000000000000000000000000000000000000001"
		const addresss6wwY3c = accounts[4]
		const addresslHYuhWI = accounts[4]
		const uintDeqrIq7 = BigInt("1409")
		const boolNPxEHn4 = await ANRXTokenr8SxjIt.transferFrom.call(addressEHh5XnQ, addresskCO7Qji, uintCDQKcYa, {from: accounts[2]});
		const boolWtmA52w = await ANRXTokenr8SxjIt.approve.call(addressE81Sucw, uintUPaBEk, {from: accounts[0]});
		const uintUYUFpgr = await ANRXTokenr8SxjIt.balanceOf.call(addressga3R5MT, {from: accounts[4]});
		const uintl2OpRl6 = await ANRXTokenr8SxjIt.allowance.call(addressYfY6r4C, addressWjwWEFy, {from: accounts[2]});
		const uintCfHjBN = await ANRXTokenr8SxjIt.allowance.call(addresslHYuhWI, addresss6wwY3c, {from: accounts[0]});
		const uintSXH40T9 = await ANRXTokenr8SxjIt.redeem.call(uintDeqrIq7, {from: accounts[1]});

		await expect(ANRXTokenr8SxjIt.transferFrom.call(addressEHh5XnQ, addresskCO7Qji, uintCDQKcYa, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintZmTm6RX = BigInt("1850")
		const stringvlfK0yR = "AlmxtxWAeIPq5nCTK9pkQ4orfiEOS"
		const stringeerv9v = "bpv1A4bOtiiNyrgyz7a"
		const uintjxBJsox = BigInt("1290")
		const ANRXTokenNR69zIX = await ANRXToken.new(uintZmTm6RX, stringvlfK0yR, stringeerv9v, uintjxBJsox, {from: accounts[4]});
		const uintd0KDsnc = BigInt("1258")
		const uintj7akE0 = await ANRXTokenNR69zIX.totalSupply.call({from: accounts[3]});
		const uintF8PCq7 = await ANRXTokenNR69zIX.issue.call(uintd0KDsnc, {from: accounts[4]});

		assert.equal(uintj7akE0, BigInt("1850"))
	});

	it('test for ANRXToken', async () => {
		const uintceIlwA = BigInt("2000")
		const string6GA70v = "6GKC47fusllGkINtIJXrK7O1YHoVsOWVVWLwqbml7g27KIMtcogofjpfLUe"
		const stringN1mRlqQ = "ouE2YDEfxnWmqlez4j7i3ow4"
		const uint9LA0w0 = BigInt("115")
		const ANRXTokenRld4sQ1 = await ANRXToken.new(uintceIlwA, string6GA70v, stringN1mRlqQ, uint9LA0w0, {from: accounts[1]});
		const addressZ6cSIpk = "0x0000000000000000000000000000000000000001"
		const addressCPIPcTz = accounts[0]
		const addressy8fjMko = accounts[1]
		const addressDMAta2j = accounts[4]
		const addresstywpaVj = accounts[2]
		const uintqK5fnHr = BigInt("760")
		const addressE5yR4c7 = accounts[5]
		const uintz1hLwj = await ANRXTokenRld4sQ1.allowance.call(addressCPIPcTz, addressZ6cSIpk, {from: accounts[0]});
		const uintYHxflZw = await ANRXTokenRld4sQ1.allowance.call(addressDMAta2j, addressy8fjMko, {from: accounts[2]});
		const uintMWLpWBZ = await ANRXTokenRld4sQ1.balanceOf.call(addresstywpaVj, {from: accounts[0]});
		const boolkzf0t6 = await ANRXTokenRld4sQ1.approve.call(addressE5yR4c7, uintqK5fnHr, {from: accounts[1]});

		assert.equal(boolkzf0t6, true)
		assert.equal(uintMWLpWBZ, BigInt("0"))
		assert.equal(uintYHxflZw, BigInt("0"))
		assert.equal(uintz1hLwj, BigInt("0"))
	});

	it('test for ANRXToken', async () => {
		const uintFXZDoyS = BigInt("222")
		const stringHVG62Av = "S01dTt"
		const stringfPdNZzb = "id24TI8C8ds6aIuLxEe4k7aFzbLYfK"
		const uintERaDgwK = BigInt("1402")
		const ANRXTokenfeWtNS = await ANRXToken.new(uintFXZDoyS, stringHVG62Av, stringfPdNZzb, uintERaDgwK, {from: accounts[3]});
		const addressBoRKKfz = accounts[0]
		const uintisYElg = BigInt("1274")
		const addressdvHCpn = accounts[0]
		const uinthAbmauG = BigInt("1363")
		const addressRreBtA = accounts[3]
		const addressqAFuFp6 = accounts[3]
		const uintFD3CJQH = await ANRXTokenfeWtNS.totalSupply.call({from: accounts[1]});
		const uintPwo39WL = await ANRXTokenfeWtNS.totalSupply.call({from: accounts[0]});
		const addressv23LFtS = await ANRXTokenfeWtNS.deprecate.call(addressBoRKKfz, {from: accounts[3]});
		const boolvsSj3PG = await ANRXTokenfeWtNS.transfer.call(addressdvHCpn, uintisYElg, {from: accounts[0]});
		const boold8ajIN = await ANRXTokenfeWtNS.transferFrom.call(addressqAFuFp6, addressRreBtA, uinthAbmauG, {from: accounts[4]});

		assert.equal(uintFD3CJQH, BigInt("222"))
		assert.equal(uintPwo39WL, BigInt("222"))
		await expect(ANRXTokenfeWtNS.transfer.call(addressdvHCpn, uintisYElg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uinttOjOtBm = BigInt("755")
		const stringTQNI3PT = "Qm4s7k1soJL5ydGCTaTdv7szRFl8g"
		const stringvyo8OC0 = "9mFzVFj7cQWINTPnjtySDKaAWsPGLM6282IpV66ebcMr0kHbz76qxVEXopsKX65JyI71TT2Vt153tNg"
		const uintK3gCkaB = BigInt("712")
		const ANRXTokenr8SxjIt = await ANRXToken.new(uinttOjOtBm, stringTQNI3PT, stringvyo8OC0, uintK3gCkaB, {from: accounts[4]});
		const uintZ7TZi6 = BigInt("801")
		const uintngS3Csd = BigInt("101")
		const addressZTETE3 = "0x0000000000000000000000000000000000000001"
		const addressb6R7WfU = accounts[1]
		const uintVhc0kGV = BigInt("1752")
		const addressWlhvQUS = accounts[3]
		const uintrVcvWjL = BigInt("67")
		const addressAE1VxKk = accounts[0]
		const addresstjcciFS = accounts[4]
		const addresstz6h109 = accounts[4]
		const uintlWWBJBA = BigInt("1409")
		const uintms0QEea = await ANRXTokenr8SxjIt.redeem.call(uintZ7TZi6, {from: accounts[4]});
		const boolNPxEHn4 = await ANRXTokenr8SxjIt.transferFrom.call(addressb6R7WfU, addressZTETE3, uintngS3Csd, {from: accounts[2]});
		const boolWtmA52w = await ANRXTokenr8SxjIt.approve.call(addressWlhvQUS, uintVhc0kGV, {from: accounts[0]});
		const uintxhx5GSE = await ANRXTokenr8SxjIt.redeem.call(uintrVcvWjL, {from: accounts[4]});
		const uintUYUFpgr = await ANRXTokenr8SxjIt.balanceOf.call(addressAE1VxKk, {from: accounts[4]});
		const uintCfHjBN = await ANRXTokenr8SxjIt.allowance.call(addresstz6h109, addresstjcciFS, {from: accounts[0]});
		const uintSXH40T9 = await ANRXTokenr8SxjIt.redeem.call(uintlWWBJBA, {from: accounts[1]});

		await expect(ANRXTokenr8SxjIt.redeem.call(uintZ7TZi6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintos3upc = BigInt("222")
		const stringHVG62Av = "S01dTt"
		const stringfPdNZzb = "id24TI8C8ds6aIuLxEe4k7aFzbLYfK"
		const uintfbE6mDL = BigInt("1402")
		const ANRXTokenfeWtNS = await ANRXToken.new(uintos3upc, stringHVG62Av, stringfPdNZzb, uintfbE6mDL, {from: accounts[3]});
		const uintjJKIv8M = BigInt("1470")
		const uintr22PVdv = BigInt("918")
		const addressCyEVHh7 = accounts[2]
		const addressQoDwcl6 = accounts[4]
		const addressTHE5P3z = accounts[1]
		const uintNlpMoNM = BigInt("1254")
		const addressSpKVOCb = accounts[0]
		const addressFRscxzh = accounts[4]
		const addresslA0W81O = accounts[3]
		const uintVVhAW1r = BigInt("1363")
		const addressM3IHK8 = accounts[3]
		const addressYmch9WS = accounts[3]
		const uintCc0uzn6 = await ANRXTokenfeWtNS.totalSupply.call({from: accounts[0]});
		const uintiEGXXR6 = await ANRXTokenfeWtNS.setParams.call(uintr22PVdv, uintjJKIv8M, {from: accounts[3]});
		const uintHj0jGxO = await ANRXTokenfeWtNS.allowance.call(addressQoDwcl6, addressCyEVHh7, {from: accounts[3]});
		const uintFD3CJQH = await ANRXTokenfeWtNS.totalSupply.call({from: accounts[1]});
		const addressv23LFtS = await ANRXTokenfeWtNS.deprecate.call(addressTHE5P3z, {from: accounts[3]});
		const boolvsSj3PG = await ANRXTokenfeWtNS.transfer.call(addressSpKVOCb, uintNlpMoNM, {from: accounts[0]});
		const uintlibng6H = await ANRXTokenfeWtNS.allowance.call(addresslA0W81O, addressFRscxzh, {from: accounts[1]});
		const boold8ajIN = await ANRXTokenfeWtNS.transferFrom.call(addressYmch9WS, addressM3IHK8, uintVVhAW1r, {from: accounts[4]});
		const uintMLTZrJF = await ANRXTokenfeWtNS.totalSupply.call({from: accounts[4]});

		assert.equal(uintCc0uzn6, BigInt("222"))
		await expect(ANRXTokenfeWtNS.setParams.call(uintr22PVdv, uintjJKIv8M, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})