const GFC = artifacts.require("GFC");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GFC', (accounts) => {
	it('test for GFC', async () => {
		const uintCwbMta6 = BigInt("1239")
		const stringUVP27u1 = "chHgmxr0Ohj6ZxqNIOx8i2Rd74l6VhYf63foUjNPSYO6p8gkwyn9ieTGG"
		const stringucBK6w = "hDnn88VpaaPyy70guRK6Il9t94a2wbyBF16dvuj3ruxIqinLb2DmIuF4IzrPyqmvrgR3vC0JDEyVcPU"
		const GFCbcL8OrO = await GFC.new(uintCwbMta6, stringUVP27u1, stringucBK6w, {from: accounts[3]});
		const uintFw80A76 = BigInt("1803")
		const addressFIdGhXw = accounts[2]
		const uinti9UYB9w = BigInt("191")
		const addressTGVfWyt = accounts[2]
		const addresssJmKs49 = accounts[5]
		const uintwP3VI99 = BigInt("183")
		const addressgL1GHRn = accounts[0]
		const uintGvPOM84 = BigInt("2018")
		const addressBErjWk = accounts[3]
		const uintC5PayLb = BigInt("69")
		const address1WhDUM = accounts[3]
		const addressxxEKeHE = accounts[1]
		const uinttJYB8k = BigInt("1216")
//		const boolP7u6uI8 = await GFCbcL8OrO.transfer.call(addressFIdGhXw, uintFw80A76, {from: accounts[0]});
//		const boolqh6hRjw = await GFCbcL8OrO.transferFrom.call(addresssJmKs49, addressTGVfWyt, uinti9UYB9w, {from: accounts[2]});
//		const boolvYN94w = await GFCbcL8OrO.transfer.call(addressgL1GHRn, uintwP3VI99, {from: accounts[2]});
//		const boolG6MWV8d = await GFCbcL8OrO.approve.call(addressBErjWk, uintGvPOM84, {from: accounts[4]});
//		const bool5y9fZj = await GFCbcL8OrO.transferFrom.call(addressxxEKeHE, address1WhDUM, uintC5PayLb, {from: accounts[4]});
//		const boolndktNC2 = await GFCbcL8OrO.burn.call(uinttJYB8k, {from: accounts[2]});

		await expect(GFCbcL8OrO.transfer.call(addressFIdGhXw, uintFw80A76, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintwb6EF61 = BigInt("1258")
		const stringwDiOIy6 = "heDF85mBFWgqW89s7cgHoBukJNP0fqEjr9BJMfTJYBPh4w6"
		const stringrZxb8eh = "D5KMZwiM86u2hM8Jcr5gXqt92yga"
		const GFCGKRJzfo = await GFC.new(uintwb6EF61, stringwDiOIy6, stringrZxb8eh, {from: "0x0000000000000000000000000000000000000001"});
		const uintdRKKDDh = BigInt("393")
		const addressIaVhQSc = accounts[4]
		const uintEiInSwH = BigInt("85")
		const addressKmJ1hrS = accounts[5]
		const uintjnDPZO5 = BigInt("1313")
		const addressVKZ7uOb = accounts[0]
		const addressAVAhzVb = accounts[3]
		const boolByMG1hi = await GFCGKRJzfo.burnFrom.call(addressIaVhQSc, uintdRKKDDh, {from: accounts[3]});
		const boolraPWN1Y = await GFCGKRJzfo.transfer.call(addressKmJ1hrS, uintEiInSwH, {from: accounts[2]});
		const boolZfgXIKc = await GFCGKRJzfo.transferFrom.call(addressAVAhzVb, addressVKZ7uOb, uintjnDPZO5, {from: accounts[3]});
	});

	it('test for GFC', async () => {
		const uint3vGOot = BigInt("1095")
		const stringLanGjAr = "u5xMtKNvGGivnXHemV6YoRFRFF"
		const stringFGhyFMu = "v13a3HbT5OpIKaiguPcNjzqcYOB7pMkcDicMKORw"
		const GFChJsxumV = await GFC.new(uint3vGOot, stringLanGjAr, stringFGhyFMu, {from: accounts[0]});
		const uintQ5aHEDx = BigInt("1865")
		const byteueTrv28 = "0x100312170803"
		const uintz0kPSAZ = BigInt("290")
		const addressjhanArF = accounts[5]
		const uintk1462Ls = BigInt("932")
//		const boolfIEWZD1 = await GFChJsxumV.burn.call(uintQ5aHEDx, {from: accounts[2]});
//		const boolPYTKAP6 = await GFChJsxumV.approveAndCall.call(addressjhanArF, uintz0kPSAZ, byteueTrv28, {from: accounts[2]});
//		const boolyglcWhd = await GFChJsxumV.burn.call(uintk1462Ls, {from: accounts[2]});

		await expect(GFChJsxumV.burn.call(uintQ5aHEDx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintO6Ud387 = BigInt("872")
		const stringOlVxezy = "xnPMEsU29xKNiUtavInX"
		const stringxwmsr1d = "3gO853IJyBrIw7L6YXPrEsXjC7jZNLvEyr1ixqWZEDaAzMQNJ"
		const GFCu3fncoC = await GFC.new(uintO6Ud387, stringOlVxezy, stringxwmsr1d, {from: accounts[4]});
		const uintWNJcz3O = BigInt("730")
		const addressppZfme = accounts[0]
		const uintOeFxFWV = BigInt("1035")
		const addressM4ZEqyZ = accounts[4]
		const uinttQ37H5 = BigInt("1075")
		const addressveXk8EN = accounts[5]
		const uintA20h37g = BigInt("1169")
		const addressda29Enj = accounts[5]
		const uinttGt6pxU = BigInt("2028")
		const addressiAsGtrg = accounts[1]
		const bytefgcDpp = "0x1c1b170a060f0c01190604070b0f05050e060d15"
		const uintzCYxFTv = BigInt("1887")
		const addresstHTY5XT = accounts[2]
		const booliCRLYjf = await GFCu3fncoC.approve.call(addressppZfme, uintWNJcz3O, {from: accounts[4]});
//		const boolJdoZ4BW = await GFCu3fncoC.burnFrom.call(addressM4ZEqyZ, uintOeFxFWV, {from: accounts[3]});
//		const boolmZkl5Md = await GFCu3fncoC.approve.call(addressveXk8EN, uinttQ37H5, {from: accounts[3]});
//		const boolDq3GGDr = await GFCu3fncoC.transfer.call(addressda29Enj, uintA20h37g, {from: accounts[3]});
//		const boolQSsGl2t = await GFCu3fncoC.approve.call(addressiAsGtrg, uinttGt6pxU, {from: accounts[2]});
//		const boolvI8jnHm = await GFCu3fncoC.approveAndCall.call(addresstHTY5XT, uintzCYxFTv, bytefgcDpp, {from: accounts[4]});

		assert.equal(booliCRLYjf, true)
		await expect(GFCu3fncoC.burnFrom.call(addressM4ZEqyZ, uintOeFxFWV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintpENX3p = BigInt("756")
		const stringv6svACp = "XIKoa4Zwsq337DafWNrlhNZr6ONKCryDKvRBjiOzeNmDQedaYgzLjwXUm"
		const stringrolabCw = "9pAwJyrpgX23WuJfnrdtSEcnf0iO6ACJt6CvEqHxjNghc90G5eYe4lq7llcinZC12y9pOd4Vysq3AJYbVdqAGbk"
		const GFCYQGkOms = await GFC.new(uintpENX3p, stringv6svACp, stringrolabCw, {from: accounts[3]});
		const byteLS74Cv8 = "0x191d"
		const uintAu8UbK7 = BigInt("1966")
		const addresssy2tzLw = accounts[3]
		const uintQNLcScZ = BigInt("1215")
		const addresstFM9EGP = accounts[2]
		const addressPJG98tK = accounts[0]
		const uintPzYXMa = BigInt("47")
		const addressW9Bc66 = "0x0000000000000000000000000000000000000001"
		const addressVsR59li = accounts[3]
//		const boolTqqDIVY = await GFCYQGkOms.approveAndCall.call(addresssy2tzLw, uintAu8UbK7, byteLS74Cv8, {from: accounts[3]});
//		const boolIBeYCBP = await GFCYQGkOms.transferFrom.call(addressPJG98tK, addresstFM9EGP, uintQNLcScZ, {from: accounts[0]});
//		const booljr3k0CC = await GFCYQGkOms.transferFrom.call(addressVsR59li, addressW9Bc66, uintPzYXMa, {from: accounts[0]});

		await expect(GFCYQGkOms.approveAndCall.call(addresssy2tzLw, uintAu8UbK7, byteLS74Cv8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintINshkZP = BigInt("139")
		const stringOGsaEJU = "UKUMbceVsqzXg1j2WaRTIWWBms6SGf7JnqACDO"
		const stringDhgILoS = "xrGQJQYJYWpmoXpK2veurEBJeag5E"
		const GFCyzRb42r = await GFC.new(uintINshkZP, stringOGsaEJU, stringDhgILoS, {from: accounts[3]});
		const uintIL59kIq = BigInt("471")
		const addresscdikPIM = accounts[3]
		const addressxESGt5c = accounts[3]
		const uintveovyw = BigInt("1213")
		const addressffRVEZP = accounts[3]
		const addresschb0rXx = accounts[3]
		const byteozhbxZi = "0x06100912071f031b1c"
		const uintAAQ8HAj = BigInt("1403")
		const addressAL4bv6I = "0x0000000000000000000000000000000000000001"
		const byteFCZRF61 = "0x0d03010d15140203081e01160820040204170e"
		const uintAAunHD9 = BigInt("495")
		const addresse9XIuCi = accounts[2]
		const uintvVE1e3b = BigInt("542")
		const addressODTpeSB = accounts[5]
		const bytee9SaknZ = "0x10080519170a19080e001c0f1b08131d170504101818160d1a0a1f"
		const uintWaRM0o = BigInt("1144")
		const addresswMb7X2l = accounts[1]
//		const boolsdTkLde = await GFCyzRb42r.transferFrom.call(addressxESGt5c, addresscdikPIM, uintIL59kIq, {from: accounts[1]});
//		const boolGHBzvVJ = await GFCyzRb42r.transferFrom.call(addresschb0rXx, addressffRVEZP, uintveovyw, {from: accounts[3]});
//		const boolE3TMwvs = await GFCyzRb42r.approveAndCall.call(addressAL4bv6I, uintAAQ8HAj, byteozhbxZi, {from: accounts[0]});
//		const boolVd9JCa8 = await GFCyzRb42r.approveAndCall.call(addresse9XIuCi, uintAAunHD9, byteFCZRF61, {from: accounts[1]});
//		const boolythANz9 = await GFCyzRb42r.burnFrom.call(addressODTpeSB, uintvVE1e3b, {from: accounts[1]});
//		const boolIM6eZdN = await GFCyzRb42r.approveAndCall.call(addresswMb7X2l, uintWaRM0o, bytee9SaknZ, {from: accounts[0]});

		await expect(GFCyzRb42r.transferFrom.call(addressxESGt5c, addresscdikPIM, uintIL59kIq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintCj9hgkc = BigInt("1239")
		const stringUVP27u1 = "chHgmxr0Ohj6ZxqNIOx8i2Rd74l6VhYf63foUjNPSYO6p8gkwyn9ieTGG"
		const stringucBK6w = "hDnn88VpaaPyy70guRK6Il9t94a2wbyBF16dvuj3ruxIqinLb2DmIuF4IzrPyqmvrgR3vC0JDEyVcPU"
		const GFCbcL8OrO = await GFC.new(uintCj9hgkc, stringUVP27u1, stringucBK6w, {from: accounts[3]});
		const uintdo70SLu = BigInt("1322")
		const uintJ9wa6GQ = BigInt("1803")
		const addressjpWjp7Q = accounts[2]
		const uintty8QjTu = BigInt("191")
		const addressIKeI4mb = accounts[2]
		const addressYP1EYEk = accounts[5]
		const uintocyViPn = BigInt("207")
		const addressM9dF1L8 = accounts[0]
		const uintgE4rmog = BigInt("2018")
		const addresssh5KSXA = accounts[4]
		const uintQ64D556 = BigInt("1109")
		const addressiIw2cM2 = accounts[5]
		const uintvpQU0Ct = BigInt("69")
		const addressbAMae0v = accounts[3]
		const addressnb3I0zM = accounts[1]
		const uintJnUaqDt = BigInt("1216")
		const boolTnpoSXA = await GFCbcL8OrO.burn.call(uintdo70SLu, {from: accounts[3]});
//		const boolP7u6uI8 = await GFCbcL8OrO.transfer.call(addressjpWjp7Q, uintJ9wa6GQ, {from: accounts[0]});
//		const boolqh6hRjw = await GFCbcL8OrO.transferFrom.call(addressYP1EYEk, addressIKeI4mb, uintty8QjTu, {from: accounts[2]});
//		const boolvYN94w = await GFCbcL8OrO.transfer.call(addressM9dF1L8, uintocyViPn, {from: accounts[2]});
//		const boolG6MWV8d = await GFCbcL8OrO.approve.call(addresssh5KSXA, uintgE4rmog, {from: accounts[4]});
//		const boolye6hoOU = await GFCbcL8OrO.approve.call(addressiIw2cM2, uintQ64D556, {from: accounts[3]});
//		const bool5y9fZj = await GFCbcL8OrO.transferFrom.call(addressnb3I0zM, addressbAMae0v, uintvpQU0Ct, {from: accounts[4]});
//		const boolndktNC2 = await GFCbcL8OrO.burn.call(uintJnUaqDt, {from: accounts[2]});

		assert.equal(boolTnpoSXA, true)
		await expect(GFCbcL8OrO.transfer.call(addressjpWjp7Q, uintJ9wa6GQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintPniDEUL = BigInt("1162")
		const stringPUDcf5D = "ddItNDQ4mMSsINtPzTGWgbMIUm7yKX5HRISKHQ"
		const stringscNzm2t = "kGNbOUhDmsU"
		const GFCg9UFcxf = await GFC.new(uintPniDEUL, stringPUDcf5D, stringscNzm2t, {from: accounts[1]});
		const uintpsMRmRO = BigInt("872")
		const addressW6n4jYM = accounts[3]
		const uintGJfCGv7 = BigInt("561")
		const addresskq2whLx = accounts[4]
		const addressiwI46Ha = accounts[1]
		const uintnEzFrI0 = BigInt("1204")
		const addressGEehTJ = accounts[0]
		const addressCmHZhRT = accounts[1]
		const boolSSEeev = await GFCg9UFcxf.transfer.call(addressW6n4jYM, uintpsMRmRO, {from: accounts[1]});
//		const boolIgcQKVB = await GFCg9UFcxf.transferFrom.call(addressiwI46Ha, addresskq2whLx, uintGJfCGv7, {from: accounts[2]});
//		const bool2IvNre = await GFCg9UFcxf.transferFrom.call(addressCmHZhRT, addressGEehTJ, uintnEzFrI0, {from: accounts[1]});

		assert.equal(boolSSEeev, true)
		await expect(GFCg9UFcxf.transferFrom.call(addressiwI46Ha, addresskq2whLx, uintGJfCGv7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})