const TetherToken = artifacts.require("TetherToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TetherToken', (accounts) => {
	it('test for TetherToken', async () => {
		const uintQ2PhguN = BigInt("870")
		const string6WDl38 = ""
		const stringeP12FND = "soXAKSRM53lTo40IwjrOjjK7pmJPfoaSDoIe7uLDmtk6B2RGRHXVELmf4yYH9heiFGExgav"
		const uintUTgtk7V = BigInt("1805")
		const TetherTokenI3srzOU = await TetherToken.new(uintQ2PhguN, string6WDl38, stringeP12FND, uintUTgtk7V, {from: accounts[1]});
		const uinttdMoi56 = BigInt("423")
		const addressc1iL8Iy = accounts[4]
		const uintFE5T8Hi = BigInt("1983")
		const addressWB8TGq4 = accounts[0]
		const uintRvob3TN = BigInt("1633")
		const addresshDLIE1 = accounts[2]
		const addressVBdyi75 = accounts[1]
		const addressNh3UQ5g = await TetherTokenI3srzOU.approve.call(addressc1iL8Iy, uinttdMoi56, {from: accounts[1]});
//		const addressqrXFSWV = await TetherTokenI3srzOU.transfer.call(addressWB8TGq4, uintFE5T8Hi, {from: "0x0000000000000000000000000000000000000001"});
//		const uintAjIggsO = await TetherTokenI3srzOU.issue.call(uintRvob3TN, {from: accounts[1]});
//		const uinttPYE6uX = await TetherTokenI3srzOU.allowance.call(addressVBdyi75, addresshDLIE1, {from: accounts[0]});

		await expect(TetherTokenI3srzOU.transfer.call(addressWB8TGq4, uintFE5T8Hi, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintzBl3OoO = BigInt("1345")
		const stringDWGVeXH = "mC8HZEpzClQzlAxeXtDJOpw9TYkv0zA8YYu8Mi2GyshQ8rwxBqq3FiYZKl7WPUaXOg4yVUER1tRCS"
		const stringTEIRgjI = "ZHNWtzhHnyzfdqwjnK5GHocQXz8owNhFSzO2DrDIjoVDrzFpgvQ4qlJXLJpifWx7Vwg8LPiOcce64cAUmAVNQTbSqA"
		const uintmYyujuT = BigInt("642")
		const TetherTokenETcZSQg = await TetherToken.new(uintzBl3OoO, stringDWGVeXH, stringTEIRgjI, uintmYyujuT, {from: accounts[4]});
		const uintBxsrP2C = BigInt("1266")
		const addresseeTqaHV = accounts[4]
		const addresscvedvc6 = accounts[3]
		const addressxwrMqg = accounts[0]
		const addressgwQdJ7e = accounts[4]
//		const addresseefJOiI = await TetherTokenETcZSQg.transferFrom.call(addresscvedvc6, addresseeTqaHV, uintBxsrP2C, {from: accounts[2]});
//		const uintuiengXJ = await TetherTokenETcZSQg.allowance.call(addressgwQdJ7e, addressxwrMqg, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TetherTokenETcZSQg.transferFrom.call(addresscvedvc6, addresseeTqaHV, uintBxsrP2C, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uint5EXA3F = BigInt("123")
		const stringCkaCJfw = "K8d7u2yMAzTjLyZKPQxe6uPo88OLcEq4b9ycX"
		const stringtv7y0dl = "0yje59Yv5oO614VZWbIlGEuo2gGOIrgDjvNXsTqzIf47l1U4dLkwr4iV7Tq"
		const uinthsTh0pa = BigInt("470")
		const TetherTokengrJ8HU7 = await TetherToken.new(uint5EXA3F, stringCkaCJfw, stringtv7y0dl, uinthsTh0pa, {from: accounts[0]});
		const uintugfQhs7 = BigInt("1281")
		const addressJZ620YG = accounts[4]
		const uintj7D6PmF = BigInt("1099")
		const uintge4GJG = BigInt("676")
		const addressyaFifdr = accounts[3]
		const uintmwYv8zd = BigInt("1019")
//		const uint7zrvLq = await TetherTokengrJ8HU7.redeem.call(uintugfQhs7, {from: accounts[1]});
//		const uintk0mUDoR = await TetherTokengrJ8HU7.totalSupply.call({from: accounts[4]});
//		const uint2wy5mT = await TetherTokengrJ8HU7.balanceOf.call(addressJZ620YG, {from: accounts[4]});
//		const uintvgfXivg = await TetherTokengrJ8HU7.setParams.call(uintge4GJG, uintj7D6PmF, {from: accounts[4]});
//		const uintZzfUIca = await TetherTokengrJ8HU7.balanceOf.call(addressyaFifdr, {from: accounts[5]});
//		const uintOkigGZl = await TetherTokengrJ8HU7.redeem.call(uintmwYv8zd, {from: accounts[0]});

		await expect(TetherTokengrJ8HU7.redeem.call(uintugfQhs7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintIFFVR0 = BigInt("24")
		const stringzmVYXpc = "KDdeg5K4kpX59P1DVUgNf62tOVFLzUdngwwmE4xa5321ph4ly4fLtlasbcsK97UVtojCUEuAa3rXo"
		const stringqQWDqPj = "8FL2jOBeURxCFTTGebyanHG"
		const uintprJSHD5 = BigInt("665")
		const TetherTokenQ1hUFan = await TetherToken.new(uintIFFVR0, stringzmVYXpc, stringqQWDqPj, uintprJSHD5, {from: accounts[1]});
		const addressyRUt8XN = accounts[1]
		const uinttN04zy4 = BigInt("1907")
		const addressUX2VSiA = accounts[3]
//		const addressvKocfRQ = await TetherTokenQ1hUFan.deprecate.call(addressyRUt8XN, {from: accounts[3]});
//		const addresse67hww = await TetherTokenQ1hUFan.approve.call(addressUX2VSiA, uinttN04zy4, {from: accounts[3]});

		await expect(TetherTokenQ1hUFan.deprecate.call(addressyRUt8XN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintRNfDmQg = BigInt("872")
		const stringk9wBS4m = "Lhi7tUqjpIntgA"
		const stringlb8lAM = "QzlHOKMpk5pPqTs11F1Ez3xJOcgaXTrwOAKkli1DVhHRJYyaYoth953FPRlpanitHEahi8ftsYwsualmLGFOWLNU"
		const uintEgYzkpj = BigInt("1999")
		const TetherTokenBynaLWH = await TetherToken.new(uintRNfDmQg, stringk9wBS4m, stringlb8lAM, uintEgYzkpj, {from: accounts[5]});
		const addresstPibvLi = "0x0000000000000000000000000000000000000001"
		const addresscy1hP27 = "0x0000000000000000000000000000000000000001"
		const uintonAlNP = BigInt("1227")
		const uintMYahCW8 = BigInt("329")
		const addressH1I5IYG = accounts[0]
		const uintBq21zG0 = await TetherTokenBynaLWH.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uintJIhKje = await TetherTokenBynaLWH.allowance.call(addresscy1hP27, addresstPibvLi, {from: accounts[3]});
//		const uintxUdELOI = await TetherTokenBynaLWH.issue.call(uintonAlNP, {from: accounts[3]});
//		const uintG85g2aJ = await TetherTokenBynaLWH.totalSupply.call({from: accounts[5]});
//		const addressWTRVddy = await TetherTokenBynaLWH.transfer.call(addressH1I5IYG, uintMYahCW8, {from: accounts[3]});

		assert.equal(uintBq21zG0, BigInt("872"))
		assert.equal(uintJIhKje, BigInt("0"))
		await expect(TetherTokenBynaLWH.issue.call(uintonAlNP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintVXggqqp = BigInt("17")
		const stringh02QAIc = "7wjF6UW87SKqC1VEAXAcHpapA32Gl"
		const stringyanWZ1o = "mbYzAyW2gvUn29K"
		const uintfRDZJl = BigInt("413")
		const TetherTokenKSMpe68 = await TetherToken.new(uintVXggqqp, stringh02QAIc, stringyanWZ1o, uintfRDZJl, {from: "0x0000000000000000000000000000000000000001"});
		const uintog7WSys = BigInt("1166")
		const addressYC1TEcQ = accounts[2]
		const uintdBK2Mjk = BigInt("303")
		const uintAxslAU8 = BigInt("222")
		const addressaaPVee = accounts[0]
		const addressdO3WLid = await TetherTokenKSMpe68.approve.call(addressYC1TEcQ, uintog7WSys, {from: accounts[1]});
		const uintgLJQjo5 = await TetherTokenKSMpe68.setParams.call(uintAxslAU8, uintdBK2Mjk, {from: accounts[1]});
		const addressBrZZJPR = await TetherTokenKSMpe68.deprecate.call(addressaaPVee, {from: accounts[4]});
	});

	it('test for TetherToken', async () => {
		const uintT70TOXa = BigInt("1345")
		const stringDWGVeXH = "mC8HZEpzClQzlAxeXtDJOpw9TYkv0zA8YYu8Mi2GyshQ8rwxBqq3FiYZKl7WPUaXOg4yVUER1tRCS"
		const stringTEIRgjI = "ZHNWtzhHnyzfdqwjnK5GHocQXz8owNhFSzO2DrDIjoVDrzFpgvQ4qlJXLJpifWx7Vwg8LPiOcce64cAUmAVNQTbSqA"
		const uint1PUZli = BigInt("642")
		const TetherTokenETcZSQg = await TetherToken.new(uintT70TOXa, stringDWGVeXH, stringTEIRgjI, uint1PUZli, {from: accounts[4]});
		const addressB8MH33v = accounts[0]
		const uintqMSmgm = BigInt("413")
		const addressNyKgfBA = accounts[0]
		const addresstrFWy0d = accounts[1]
		const uintnyzYFgW = BigInt("1266")
		const addressEIe5OQ5 = accounts[4]
		const addressi7T9Cht = accounts[3]
		const addressN1VJJm = accounts[1]
		const addressvsnnThO = accounts[4]
		const addressE4PA9FX = await TetherTokenETcZSQg.deprecate.call(addressB8MH33v, {from: accounts[4]});
//		const addresscRlexXH = await TetherTokenETcZSQg.transferFrom.call(addresstrFWy0d, addressNyKgfBA, uintqMSmgm, {from: accounts[2]});
//		const addresseefJOiI = await TetherTokenETcZSQg.transferFrom.call(addressi7T9Cht, addressEIe5OQ5, uintnyzYFgW, {from: accounts[2]});
//		const uintuiengXJ = await TetherTokenETcZSQg.allowance.call(addressvsnnThO, addressN1VJJm, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TetherTokenETcZSQg.transferFrom.call(addresstrFWy0d, addressNyKgfBA, uintqMSmgm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintG5UHETB = BigInt("24")
		const stringzmVYXpc = "KDdeg5K4kpX59P1DVUgNf62tOVFLzUdngwwmE4xa5321ph4ly4fLtlasbcsK97UVtojCUEuAa3rXo"
		const stringqQWDqPj = "8FL2jOBeURxCFTTGebyanHG"
		const uintnbhva4T = BigInt("665")
		const TetherTokenQ1hUFan = await TetherToken.new(uintG5UHETB, stringzmVYXpc, stringqQWDqPj, uintnbhva4T, {from: accounts[1]});
		const uinttn3kESv = BigInt("1907")
		const addresspUoK7VI = accounts[4]
		const uintGlxL46A = BigInt("169")
		const uintwBkjrcU = BigInt("635")
		const uintb2Bpn4S = BigInt("1779")
		const addresse67hww = await TetherTokenQ1hUFan.approve.call(addresspUoK7VI, uinttn3kESv, {from: accounts[3]});
//		const uintvf0TTOO = await TetherTokenQ1hUFan.redeem.call(uintGlxL46A, {from: accounts[1]});
//		const uintOP5nWpx = await TetherTokenQ1hUFan.setParams.call(uintb2Bpn4S, uintwBkjrcU, {from: accounts[4]});

		await expect(TetherTokenQ1hUFan.redeem.call(uintGlxL46A, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintYCYH8eC = BigInt("24")
		const stringzmVYXpc = "KDdeg5K4kpX59P1DVUgNf62tOVFLzUdngwwmE4xa5321ph4ly4fLtlasbcsK97UVtojCUEuAa3rXo"
		const stringqQWDqPj = "8FL2jOBeURxCFTTGebyanHG"
		const uintsrueW4 = BigInt("665")
		const TetherTokenQ1hUFan = await TetherToken.new(uintYCYH8eC, stringzmVYXpc, stringqQWDqPj, uintsrueW4, {from: accounts[1]});
		const addressa8AAjFG = accounts[3]
		const addresso5lqexi = accounts[3]
		const addressS2wQZS9 = "0x0000000000000000000000000000000000000001"
		const uintx3kcmr = BigInt("12")
		const addressMsG8trj = accounts[4]
		const uintJHulsKp = BigInt("1871")
		const addressaKeH4Y = accounts[4]
		const uintg6A3Su = await TetherTokenQ1hUFan.allowance.call(addresso5lqexi, addressa8AAjFG, {from: accounts[1]});
		const uinthuoBBPe = await TetherTokenQ1hUFan.balanceOf.call(addressS2wQZS9, {from: accounts[2]});
		const addressfgDBHEG = await TetherTokenQ1hUFan.approve.call(addressMsG8trj, uintx3kcmr, {from: accounts[2]});
		const addresse67hww = await TetherTokenQ1hUFan.approve.call(addressaKeH4Y, uintJHulsKp, {from: accounts[3]});

		assert.equal(uintg6A3Su, BigInt("0"))
		assert.equal(uinthuoBBPe, BigInt("0"))
	});

	it('test for TetherToken', async () => {
		const uintvirPi0I = BigInt("24")
		const stringzmVYXpc = "KDdeg5K4kpX59P1DVUgNf62tOVFLzUdngwwmE4xa5321ph4ly4fLtlasbcsK97UVtojCUEuAa3rXo"
		const stringqQWDqPj = "8FL2jOBeURxCFTTGebyanHG"
		const uintL5KN02H = BigInt("665")
		const TetherTokenQ1hUFan = await TetherToken.new(uintvirPi0I, stringzmVYXpc, stringqQWDqPj, uintL5KN02H, {from: accounts[1]});
		const uintC0idF3m = BigInt("832")
		const uintG5igosW = BigInt("728")
		const uinteR8vWMM = BigInt("12")
		const addressdqOtcvs = accounts[4]
		const uintrYmHAGj = BigInt("1947")
		const addressA3WLE3h = accounts[0]
		const addressS8rXzsZ = accounts[3]
		const uintYTrjwsm = BigInt("1907")
		const addressPMK1GEl = accounts[4]
//		const uintw3pPacY = await TetherTokenQ1hUFan.setParams.call(uintG5igosW, uintC0idF3m, {from: accounts[1]});
//		const addressfgDBHEG = await TetherTokenQ1hUFan.approve.call(addressdqOtcvs, uinteR8vWMM, {from: accounts[2]});
//		const addressotd4tt3 = await TetherTokenQ1hUFan.transferFrom.call(addressS8rXzsZ, addressA3WLE3h, uintrYmHAGj, {from: accounts[3]});
//		const addresse67hww = await TetherTokenQ1hUFan.approve.call(addressPMK1GEl, uintYTrjwsm, {from: accounts[3]});

		await expect(TetherTokenQ1hUFan.setParams.call(uintG5igosW, uintC0idF3m, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintbfZTPkC = BigInt("1238")
		const stringXpsBahm = "XqwXTnW3VEJMR5H6JBSq"
		const stringmP3le7k = "24oSPhPXmBorTmsaQ9ns4T9533BMjN7tCCCmY9INcDjHHAD6kfMW40OUThh19OI8feBXjxLganN7IXq"
		const uintZlQxJZr = BigInt("1163")
		const TetherTokenEaCGNa5 = await TetherToken.new(uintbfZTPkC, stringXpsBahm, stringmP3le7k, uintZlQxJZr, {from: accounts[0]});
		const uintLHfiZUE = BigInt("1332")
		const uintwfPA4Dv = BigInt("358")
		const addressZ8cJ38H = accounts[3]
		const addresswGt8be8 = accounts[0]
		const uintNavkbhf = BigInt("1109")
		const addresserQqDBa = accounts[3]
		const uintcCEj597 = await TetherTokenEaCGNa5.issue.call(uintLHfiZUE, {from: accounts[0]});
//		const addresshxHssCC = await TetherTokenEaCGNa5.transferFrom.call(addresswGt8be8, addressZ8cJ38H, uintwfPA4Dv, {from: accounts[1]});
//		const addressBCzolv = await TetherTokenEaCGNa5.approve.call(addresserQqDBa, uintNavkbhf, {from: accounts[2]});

		await expect(TetherTokenEaCGNa5.transferFrom.call(addresswGt8be8, addressZ8cJ38H, uintwfPA4Dv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintgqYjFpg = BigInt("1238")
		const stringXpsBahm = "XqwXTnW3VEJMR5H6JBSq"
		const stringmP3le7k = "24oSPhPXmBorTmsaQ9ns4T9533BMjN7tCCCmY9INcDjHHAD6kfMW40OUThh19OI8feBXjxLganN7IXq"
		const uintp9ul706 = BigInt("1163")
		const TetherTokenEaCGNa5 = await TetherToken.new(uintgqYjFpg, stringXpsBahm, stringmP3le7k, uintp9ul706, {from: accounts[0]});
		const addressmwQkJEK = "0x00000000000000000000000000000000000000-1"
//		const uintYJFc6By = await TetherTokenEaCGNa5.balanceOf.call(addressmwQkJEK, {from: accounts[3]});

		await expect(TetherTokenEaCGNa5.balanceOf.call(addressmwQkJEK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintsULRMUz = BigInt("1238")
		const stringXpsBahm = "XqwXTnW3VEJMR5H6JBSq"
		const stringmP3le7k = "24oSPhPXmBorTmsaQ9ns4T9533BMjN7tCCCmY9INcDjHHAD6kfMW40OUThh19OI8feBXjxLganN7IXq"
		const uintrUCKUv = BigInt("1163")
		const TetherTokenEaCGNa5 = await TetherToken.new(uintsULRMUz, stringXpsBahm, stringmP3le7k, uintrUCKUv, {from: accounts[0]});
		const uintqpuZhIQ = BigInt("469")
		const uintCesXL79 = BigInt("379")
		const addressXea4CS = accounts[3]
		const addresspzsLCW9 = accounts[0]
		const uintcj2VyGm = await TetherTokenEaCGNa5.redeem.call(uintqpuZhIQ, {from: accounts[0]});
//		const addresshxHssCC = await TetherTokenEaCGNa5.transferFrom.call(addresspzsLCW9, addressXea4CS, uintCesXL79, {from: accounts[1]});

		await expect(TetherTokenEaCGNa5.transferFrom.call(addresspzsLCW9, addressXea4CS, uintCesXL79, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})