const Liquidity_v8 = artifacts.require("Liquidity_v8");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Liquidity_v8', (accounts) => {
	it('test for Liquidity_v8', async () => {
		const stringox90Ad = "q6PPgVeR7ilqKg4RiCXWrhydrEGJSioCuZExiAGXWE88ASjfJ7DcoZNfsckqYGvXfCLMxedJSkyEJZzXXAf6Am"
		const addressWzZ1lJb = accounts[3]
		const addressAANBEv = accounts[3]
		const uintmSwhuZ4 = BigInt("595")
		const uintSNRdGNJ = BigInt("223")
		const Liquidity_v8s3FWKJb = await Liquidity_v8.new(stringox90Ad, addressWzZ1lJb, addressAANBEv, uintmSwhuZ4, uintSNRdGNJ, {from: accounts[4]});
		const uintXOc0oj = BigInt("1000")
		const addressON0rfO3 = accounts[3]
		const booll6CZNN8 = await Liquidity_v8s3FWKJb.stake.call(uintXOc0oj, {from: accounts[4]});
		const addressgqpM3bQ = await Liquidity_v8s3FWKJb.transferOwnership.call(addressON0rfO3, {from: accounts[4]});
		await Liquidity_v8s3FWKJb.onlyOwner.call({from: accounts[0]});
		await Liquidity_v8s3FWKJb.onlyOwner.call({from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringMk17nfr = "Ti3IfGgE6seXjByTqbzfzeItrVa8524YjmutfNilmgufFI3TH8s2P27le2lAXhFz5rz1psBe8JHRaaGDAWpLrJf9ElE1e"
		const addressAm8KtQA = accounts[4]
		const addressFapmkzk = accounts[4]
		const uintOr5u9r = BigInt("183")
		const uintZGB55l = BigInt("982")
		const Liquidity_v8q8E35js = await Liquidity_v8.new(stringMk17nfr, addressAm8KtQA, addressFapmkzk, uintOr5u9r, uintZGB55l, {from: accounts[0]});
		const uintIko209V = BigInt("37")
		const uint84Q1Z2 = BigInt("917")
		const uint64vS1TcKn = await Liquidity_v8q8E35js.setRate.call(uintIko209V, {from: accounts[4]});
		const boolZoxnl5F = await Liquidity_v8q8E35js.stake.call(uint84Q1Z2, {from: accounts[2]});
		await Liquidity_v8q8E35js.onlyOwner.call({from: accounts[4]});
		const boolR0lmR5b = await Liquidity_v8q8E35js.withdraw.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Liquidity_v8', async () => {
		const stringXF2bsbr = "YuHcLP8zeB0kJ147vjFbVVcdkT1wi5l2I6EzKq4nxtvtmTnxYdqhIyHyCBLlCrevTbRwM"
		const addressIOSy2j0 = accounts[2]
		const addressvNa76xj = accounts[1]
		const uintpt6rtn = BigInt("69")
		const uintZNAKOyH = BigInt("1067")
		const Liquidity_v8Ad4X9Hx = await Liquidity_v8.new(stringXF2bsbr, addressIOSy2j0, addressvNa76xj, uintpt6rtn, uintZNAKOyH, {from: accounts[3]});
		const uintmIkuqT5 = BigInt("1233")
		const boolPggD4Qq = await Liquidity_v8Ad4X9Hx.emergencyWithdraw.call({from: accounts[5]});
		const boollYXSa1W = await Liquidity_v8Ad4X9Hx.addReward.call(uintmIkuqT5, {from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringXQlAAAB = "n9b9zKcPuXedTRu5t8JOw2kjDR7SoBMaQrfDhLLs0eTOzka3CcrrepAqE8dp4jSwInXu5J"
		const addressV330Uxw = "0x0000000000000000000000000000000000000001"
		const addressTg2gUdE = accounts[1]
		const uintEAJrwcl = BigInt("1572")
		const uintsTF848g = BigInt("172")
		const Liquidity_v8jkigT7M = await Liquidity_v8.new(stringXQlAAAB, addressV330Uxw, addressTg2gUdE, uintEAJrwcl, uintsTF848g, {from: accounts[1]});
		const addressq7f5iRP = accounts[0]
		const addressthKGWww = accounts[3]
		const uintZGf3Iga = BigInt("54")
		const 
fcGxrwc = await Liquidity_v8jkigT7M.userDeposits.call(addressq7f5iRP, {from: accounts[2]});
		const addresspc346Zs = await Liquidity_v8jkigT7M.owner.call({from: accounts[0]});
		const uint256T8PLYUx = await Liquidity_v8jkigT7M.calculate.call(addressthKGWww, {from: "0x0000000000000000000000000000000000000001"});
		const uint256nNbY2kF = await Liquidity_v8jkigT7M.changeLockDuration.call(uintZGf3Iga, {from: accounts[3]});
		await Liquidity_v8jkigT7M.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Liquidity_v8', async () => {
		const stringrZmKMqV = "xunjWhEAoNekVwinszILeCgj228P3IOY3d6WgqyHak2"
		const addresslzXUehh = accounts[3]
		const addressrn3WCS9 = accounts[4]
		const uintptBP1T6 = BigInt("697")
		const uintzGCJTNH = BigInt("477")
		const Liquidity_v8LNVBTF = await Liquidity_v8.new(stringrZmKMqV, addresslzXUehh, addressrn3WCS9, uintptBP1T6, uintzGCJTNH, {from: "0x0000000000000000000000000000000000000001"});
		const uintUhHXgck = BigInt("777")
		const uintm7LPlQ = BigInt("802")
		const addressXsw1ZiU = accounts[4]
		const boolXYwLGbf = await Liquidity_v8LNVBTF.stake.call(uintUhHXgck, {from: accounts[4]});
		const uint256q10idDu = await Liquidity_v8LNVBTF.changeLockDuration.call(uintm7LPlQ, {from: accounts[4]});
		const uint256HF44y4O = await Liquidity_v8LNVBTF.calculate.call(addressXsw1ZiU, {from: accounts[4]});
		const boolNY5ueS = await Liquidity_v8LNVBTF.withdraw.call({from: accounts[0]});
		const boolgxyWqzV = await Liquidity_v8LNVBTF.withdraw.call({from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringf6Pee5j = "4jh3MuhEsEWhS3iwEbtstWvCsr8pTLxuQpkMG4cSCcPSSHSO7RqJyBaYTOl"
		const addressv517shW = accounts[3]
		const addressVRR52C8 = accounts[0]
		const uintpLr5nWQ = BigInt("2012")
		const uintYo9qhD4 = BigInt("963")
		const Liquidity_v8KhJasFG = await Liquidity_v8.new(stringf6Pee5j, addressv517shW, addressVRR52C8, uintpLr5nWQ, uintYo9qhD4, {from: accounts[4]});
		const addressAyLYvJ = accounts[3]
		const addressVFRZD2E = accounts[3]
		const addressEwNyvc = accounts[1]
		const uintcbtWrBG = BigInt("1933")
		const 
jpohxVB = await Liquidity_v8KhJasFG.userDeposits.call(addressAyLYvJ, {from: accounts[2]});
		await Liquidity_v8KhJasFG.onlyOwner.call({from: accounts[4]});
		const addressa93ARib = await Liquidity_v8KhJasFG.transferOwnership.call(addressVFRZD2E, {from: accounts[1]});
		await Liquidity_v8KhJasFG.onlyOwner.call({from: accounts[0]});
		const boolGpdiK8F = await Liquidity_v8KhJasFG.isOwner.call({from: accounts[0]});
		const 
qzUyjZV = await Liquidity_v8KhJasFG.userDeposits.call(addressEwNyvc, {from: accounts[3]});
		const uint64EXMbZtm = await Liquidity_v8KhJasFG.setRate.call(uintcbtWrBG, {from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringwo4xrZM = "HnUZrzbk3Y8Sc3AepIJWKuQtjJSywmtk2"
		const addressTXCDzJD = accounts[2]
		const addressAp3rAqe = accounts[4]
		const uintdrvWEX7 = BigInt("1452")
		const uintOFlMFBx = BigInt("1471")
		const Liquidity_v8HMdxij4 = await Liquidity_v8.new(stringwo4xrZM, addressTXCDzJD, addressAp3rAqe, uintdrvWEX7, uintOFlMFBx, {from: accounts[5]});
		const addressRTixegU = accounts[4]
		const uintSmcoT24 = BigInt("1323")
		const addressoYY2foK = accounts[1]
		const boolKsEN0a6 = await Liquidity_v8HMdxij4.withdraw.call({from: accounts[0]});
		const boolAFwSTy = await Liquidity_v8HMdxij4.isOwner.call({from: accounts[3]});
		const 
F6wIFMY = await Liquidity_v8HMdxij4._hasAllowance.call(addressoYY2foK, uintSmcoT24, addressRTixegU, {from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringAalJ9N = "kbANqp3lm"
		const addressd17w6YC = accounts[1]
		const addressIM239Y4 = accounts[4]
		const uintsjzLPyg = BigInt("601")
		const uintiKvzACp = BigInt("1858")
		const Liquidity_v81q6DJq = await Liquidity_v8.new(stringAalJ9N, addressd17w6YC, addressIM239Y4, uintsjzLPyg, uintiKvzACp, {from: accounts[3]});
		const uinteuRdqVT = BigInt("257")
		const addressg9sgWa9 = accounts[2]
		await Liquidity_v81q6DJq.renounceOwnership.call({from: accounts[3]});
		const uint64U6DZu7y = await Liquidity_v81q6DJq.setRate.call(uinteuRdqVT, {from: "0x0000000000000000000000000000000000000001"});
		const 
i4sJqxr = await Liquidity_v81q6DJq.userDeposits.call(addressg9sgWa9, {from: accounts[5]});
		await Liquidity_v81q6DJq.renounceOwnership.call({from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringXQlAAAB = "n9b9zKcPuXedTRu5t8JOw2kjDR7SoBMaQrfDhLLs0eTOzka3CcrrepAqE8dp4jSwInXu5J"
		const addressWdDFPZ = "0x0000000000000000000000000000000000000001"
		const addressigQVnBf = accounts[1]
		const uintU3qXdmh = BigInt("1572")
		const uinthkUMQOF = BigInt("172")
		const Liquidity_v8jkigT7M = await Liquidity_v8.new(stringXQlAAAB, addressWdDFPZ, addressigQVnBf, uintU3qXdmh, uinthkUMQOF, {from: accounts[1]});
		const uintuXGRKfp = BigInt("571")
		const addressj4PY6uk = accounts[0]
		const addressyPJvEG3 = "0x0000000000000000000000000000000000000001"
		const addressJvE5wt6 = accounts[3]
		const uint256l1853T2 = await Liquidity_v8jkigT7M.changeLockDuration.call(uintuXGRKfp, {from: accounts[1]});
		const boolyjeTPsr = await Liquidity_v8jkigT7M.isOwner.call({from: accounts[3]});
		const 
fcGxrwc = await Liquidity_v8jkigT7M.userDeposits.call(addressj4PY6uk, {from: accounts[2]});
		const 
fmGBBgP = await Liquidity_v8jkigT7M.userDeposits.call(addressyPJvEG3, {from: accounts[1]});
		const addresspc346Zs = await Liquidity_v8jkigT7M.owner.call({from: accounts[0]});
		const uint256T8PLYUx = await Liquidity_v8jkigT7M.calculate.call(addressJvE5wt6, {from: "0x0000000000000000000000000000000000000001"});
		const boolRVDt0gk = await Liquidity_v8jkigT7M.emergencyWithdraw.call({from: accounts[2]});
		await Liquidity_v8jkigT7M.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Liquidity_v8', async () => {
		const stringEKu3qcy = "plgJqgIhge7k2xzwoNzMcuwS2jEyFNcBOJJXiFT8j5hBg2iWTW3X4am29ofHE"
		const addresswebp5Mf = accounts[2]
		const addresshBiUXH = "0x0000000000000000000000000000000000000001"
		const uintMly6xJr = BigInt("843")
		const uintHP4G8LK = BigInt("616")
		const Liquidity_v8vOw1phj = await Liquidity_v8.new(stringEKu3qcy, addresswebp5Mf, addresshBiUXH, uintMly6xJr, uintHP4G8LK, {from: accounts[0]});
		const addressaj9m7Ym = accounts[5]
		const addressgUekO7R = accounts[0]
		const uinthxnb9hm = BigInt("45")
		const uint256q3M3DBA = await Liquidity_v8vOw1phj.calculate.call(addressaj9m7Ym, {from: accounts[3]});
		const uint256OKwg8XJ = await Liquidity_v8vOw1phj.calculate.call(addressgUekO7R, {from: accounts[0]});
		const uint64hUNf8ZO = await Liquidity_v8vOw1phj.setRate.call(uinthxnb9hm, {from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringXQlAAAB = "n9b9zKcPuXedTRu5t8JOw2kjDR7SoBMaQrfDhLLs0eTOzka3CcrrepAqE8dp4jSwInXu5J"
		const addressdwTMyZ = "0x0000000000000000000000000000000000000001"
		const addressD0vIdz = accounts[1]
		const uintWRNvTyo = BigInt("1572")
		const uintKK8CoQ1 = BigInt("172")
		const Liquidity_v8jkigT7M = await Liquidity_v8.new(stringXQlAAAB, addressdwTMyZ, addressD0vIdz, uintWRNvTyo, uintKK8CoQ1, {from: accounts[1]});
		const addressrjTqNYj = accounts[2]
		const addressCQEoMS = accounts[2]
		const addressIxUCdm4 = accounts[0]
		const addressqOxEXrS = accounts[3]
		const uintAghaacy = BigInt("54")
		const uintjN61seF = BigInt("1266")
		const 
fcGxrwc = await Liquidity_v8jkigT7M.userDeposits.call(addressrjTqNYj, {from: accounts[2]});
		const addressAYt3ti = await Liquidity_v8jkigT7M.transferOwnership.call(addressCQEoMS, {from: accounts[1]});
		const uint256IkddZxL = await Liquidity_v8jkigT7M.calculate.call(addressIxUCdm4, {from: accounts[2]});
		const boolKFCl0AA = await Liquidity_v8jkigT7M.emergencyWithdraw.call({from: accounts[0]});
		const addresspc346Zs = await Liquidity_v8jkigT7M.owner.call({from: accounts[0]});
		const uint256T8PLYUx = await Liquidity_v8jkigT7M.calculate.call(addressqOxEXrS, {from: "0x0000000000000000000000000000000000000001"});
		await Liquidity_v8jkigT7M.renounceOwnership.call({from: accounts[2]});
		const uint256nNbY2kF = await Liquidity_v8jkigT7M.changeLockDuration.call(uintAghaacy, {from: accounts[3]});
		await Liquidity_v8jkigT7M.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256bvQOK3u = await Liquidity_v8jkigT7M.changeLockDuration.call(uintjN61seF, {from: accounts[3]});
	});
})