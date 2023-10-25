const WheatFarm = artifacts.require("WheatFarm");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WheatFarm', (accounts) => {
	it('test for WheatFarm', async () => {
		const stringDYJzUZ = "pQPEqQ8R2Lc2VvFiH8RxOcBNvSryyUGitQ5bb7vvGm9qx7jod1UyWdU"
		const stringKhBGrfW = "ML3cDP1GR9Q3YXpc2GQqfL"
		const uintl4jm83O = BigInt("680")
		const WheatFarmaR81aEc = await WheatFarm.new(stringDYJzUZ, stringKhBGrfW, uintl4jm83O, {from: accounts[2]});
		const uintvOZWDbZ = BigInt("1794")
		const addressMX92qXT = accounts[4]
		const uintgP7r45v = BigInt("1654")
		const addressb1ONo2h = accounts[3]
//		const booltG1jpoJ = await WheatFarmaR81aEc.transfer.call(addressMX92qXT, uintvOZWDbZ, {from: accounts[1]});
//		const boolOdQ3IcH = await WheatFarmaR81aEc.transfer.call(addressb1ONo2h, uintgP7r45v, {from: accounts[5]});
//		const string3X6fdD = await WheatFarmaR81aEc.name.call({from: accounts[2]});

		await expect(WheatFarmaR81aEc.transfer.call(addressMX92qXT, uintvOZWDbZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringSaZ2jMO = "hz2xXNPahF1cpE727NTbcAEpOX3PakxjjtVEjGu2tC7kO"
		const stringatHLi69 = "jm84zk2tBV5IiJtEUuEF72w3SQ7cg27B8ea42JvVVvbwmqEI5MjRK6QOLg7MUUCARHCRwpy"
		const uintLDlEZx3 = BigInt("152")
		const WheatFarmvIpYph = await WheatFarm.new(stringSaZ2jMO, stringatHLi69, uintLDlEZx3, {from: accounts[3]});
		const uintFU4f8gO = BigInt("563")
		const addressaXWIXR3 = accounts[3]
		const uintz8ESOe1 = BigInt("485")
		const addresspZi6zSr = accounts[0]
		const addresswnt8QoS = accounts[3]
		const boolmaho5Z9 = await WheatFarmvIpYph.approve.call(addressaXWIXR3, uintFU4f8gO, {from: accounts[2]});
		const stringxL6O1hi = await WheatFarmvIpYph.name.call({from: accounts[4]});
//		const boolTCQWCs = await WheatFarmvIpYph.transferFrom.call(addresswnt8QoS, addresspZi6zSr, uintz8ESOe1, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolmaho5Z9, true)
		assert.equal(stringxL6O1hi, "hz2xXNPahF1cpE727NTbcAEpOX3PakxjjtVEjGu2tC7kO")
		await expect(WheatFarmvIpYph.transferFrom.call(addresswnt8QoS, addresspZi6zSr, uintz8ESOe1, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringnmqFcr2 = "2Ev6w1RXGx4CaKVpDGMGene9HMklcPNBQ"
		const stringDdoptT = "HEVHumImdhdtObZRh54EHqqqodNALz3TqSvZFzy8REXaJs02uc3fYZQHhClo4y138h5lkVWAHlapcgNOoAihIqQO23tu7B"
		const uintNuZ8XDW = BigInt("193")
		const WheatFarmXx5suOu = await WheatFarm.new(stringnmqFcr2, stringDdoptT, uintNuZ8XDW, {from: "0x0000000000000000000000000000000000000001"});
		const uintpBShef = BigInt("1516")
		const addressNdGNKy6 = accounts[4]
		const uintkG6cWz = BigInt("1482")
		const addressJf8ZYRg = "0x0000000000000000000000000000000000000001"
		const addressvSrzZci = "0x0000000000000000000000000000000000000001"
		const addresskLjk9e7 = accounts[1]
		const boolJi28QL = await WheatFarmXx5suOu.transfer.call(addressNdGNKy6, uintpBShef, {from: accounts[1]});
		const boolyR1EGA3 = await WheatFarmXx5suOu.transfer.call(addressJf8ZYRg, uintkG6cWz, {from: accounts[0]});
		const uintBmz6nfR = await WheatFarmXx5suOu.allowance.call(addresskLjk9e7, addressvSrzZci, {from: accounts[3]});
		const uintNEaVkcF = await WheatFarmXx5suOu.totalSupply.call({from: accounts[3]});
	});

	it('test for WheatFarm', async () => {
		const stringWSbRd9Z = "ZvoxOXwSsmgdJeozTN4kcEVp1IfXF0tmFT0lYvN6O33CmPkr7lC"
		const stringWRxUgG3 = "tz1"
		const uint8LJzzK = BigInt("49")
		const WheatFarmdd30W5C = await WheatFarm.new(stringWSbRd9Z, stringWRxUgG3, uint8LJzzK, {from: accounts[0]});
		const uintH2EM5cs = BigInt("586")
		const addressrKxhkAW = accounts[0]
		const uintxpKe8RZ = BigInt("1178")
		const addressvN4mw31 = "0x0000000000000000000000000000000000000001"
		const uintXDVx5Xe = BigInt("1092")
		const addressTkGLa2q = accounts[2]
//		const boolUPEc2hu = await WheatFarmdd30W5C.decreaseAllowance.call(addressrKxhkAW, uintH2EM5cs, {from: accounts[2]});
//		const boolTl4Uymr = await WheatFarmdd30W5C.approve.call(addressvN4mw31, uintxpKe8RZ, {from: accounts[2]});
//		const boolKDTLtYV = await WheatFarmdd30W5C.transfer.call(addressTkGLa2q, uintXDVx5Xe, {from: accounts[4]});

		await expect(WheatFarmdd30W5C.decreaseAllowance.call(addressrKxhkAW, uintH2EM5cs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringS0KQPHy = "AJURpdBszjfwYJxfBI0GEMw4JjvC8lKzAbvbOR2NKVTEJVUXHUr8cBGvnP3rmEYBqALfUBEJdWREym"
		const stringtec1P4n = "9WCeC8CXoPjzDsriEpPV4uEXwV91vBhLqhfBCVWmPg4EfXFrsHb6DCE7zaqiB"
		const uintedFCDuU = BigInt("1983")
		const WheatFarmD6kYvS4 = await WheatFarm.new(stringS0KQPHy, stringtec1P4n, uintedFCDuU, {from: accounts[1]});
		const uintqe2E7qc = BigInt("1492")
		const addresswjfLHw = accounts[1]
		const uintogvuCQ = BigInt("1036")
		const addressy5y7jQT = accounts[5]
		const uintQr2LtgD = BigInt("1324")
		const addressTN6x0Jl = accounts[5]
		const uintGKA0CzM = BigInt("127")
		const addressSKLgaw5 = accounts[4]
		const boolMQ9QsxE = await WheatFarmD6kYvS4.approve.call(addresswjfLHw, uintqe2E7qc, {from: "0x0000000000000000000000000000000000000001"});
//		const booliEO7IXU = await WheatFarmD6kYvS4.approveAndCall.call(addressy5y7jQT, uintogvuCQ, {from: "0x0000000000000000000000000000000000000001"});
//		const bool2AUlMn = await WheatFarmD6kYvS4.approve.call(addressTN6x0Jl, uintQr2LtgD, {from: accounts[1]});
//		const stringgBo68g = await WheatFarmD6kYvS4.symbol.call({from: accounts[4]});
//		const boolT1mANDm = await WheatFarmD6kYvS4.decreaseAllowance.call(addressSKLgaw5, uintGKA0CzM, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolMQ9QsxE, true)
		await expect(WheatFarmD6kYvS4.approveAndCall.call(addressy5y7jQT, uintogvuCQ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringDYJzUZ = "pQPEqQ8R2Lc2VvFiH8RxOcBNvSryyUGitQ5bb7vvGm9qx7jod1UyWdU"
		const stringKhBGrfW = "ML3cDP1GR9Q3YXpc2GQqfL"
		const uintvkE4MBZ = BigInt("680")
		const WheatFarmaR81aEc = await WheatFarm.new(stringDYJzUZ, stringKhBGrfW, uintvkE4MBZ, {from: accounts[2]});
		const uintChKjEZC = BigInt("356")
		const addressRO5w2wc = accounts[2]
		const uintLCXVftq = BigInt("1794")
		const addressnoCIDG = accounts[4]
		const uintohPQCcj = BigInt("1654")
		const addressfzQYpB = accounts[3]
		const uintNhUX6E7 = BigInt("1324")
		const addressqq5uAuz = accounts[4]
		const addressg4EDw5R = accounts[3]
//		const boole9GFZRc = await WheatFarmaR81aEc.transfer.call(addressRO5w2wc, uintChKjEZC, {from: accounts[0]});
//		const booltG1jpoJ = await WheatFarmaR81aEc.transfer.call(addressnoCIDG, uintLCXVftq, {from: accounts[1]});
//		const boolOdQ3IcH = await WheatFarmaR81aEc.transfer.call(addressfzQYpB, uintohPQCcj, {from: accounts[5]});
//		const boolJKsiVC4 = await WheatFarmaR81aEc.transferFrom.call(addressg4EDw5R, addressqq5uAuz, uintNhUX6E7, {from: accounts[3]});

		await expect(WheatFarmaR81aEc.transfer.call(addressRO5w2wc, uintChKjEZC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringcHNxnRz = "U3o7ZAyXuYynQjcT843u5M7vCluceQ2UgObjUHz5CtC"
		const stringtBRyuK7 = "RP9pank83j4iBuLRBnvoDBwmLFmXmMb6ysevMqdd8Y5vIlm5L2ZTvznWJFRzQVItKWARNqlhzCmZSHtfYXO9TQhK4XnvGgnjGv"
		const uinteYuXPNd = BigInt("169")
		const WheatFarmjrKpCSd = await WheatFarm.new(stringcHNxnRz, stringtBRyuK7, uinteYuXPNd, {from: accounts[1]});
		const addresscgo3pv7 = "0x0000000000000000000000000000000000000001"
		const addressOa98Kl9 = accounts[5]
		const addresskBKf6IX = accounts[1]
		const addressyzoWooQ = accounts[3]
		const addresskqr5N8C = accounts[2]
		const uintABY3WMC = BigInt("268")
		const addressKsNbEcy = accounts[2]
		const addressjf9bm5x = accounts[3]
//		const boolelm4Usz = await WheatFarmjrKpCSd.transferownership.call(addresscgo3pv7, {from: accounts[0]});
//		const uintped3sOD = await WheatFarmjrKpCSd.allowance.call(addresskBKf6IX, addressOa98Kl9, {from: accounts[1]});
//		const stringDtg4902 = await WheatFarmjrKpCSd.symbol.call({from: accounts[4]});
//		const stringbCxNTLb = await WheatFarmjrKpCSd.name.call({from: accounts[0]});
//		const uintYrHHUO2 = await WheatFarmjrKpCSd.balanceOf.call(addressyzoWooQ, {from: accounts[1]});
//		const uintwxnLMK2 = await WheatFarmjrKpCSd.balanceOf.call(addresskqr5N8C, {from: accounts[3]});
//		const boolfXHYnJq = await WheatFarmjrKpCSd.transferFrom.call(addressjf9bm5x, addressKsNbEcy, uintABY3WMC, {from: accounts[1]});
//		const uintFTMi1Ik = await WheatFarmjrKpCSd.totalSupply.call({from: accounts[3]});

		await expect(WheatFarmjrKpCSd.transferownership.call(addresscgo3pv7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringfRHCumd = "nYB05xpuKkd4oAK7g7iGz71cB0N0jGm37sDU9Y2ue6lgPMwhTR3bc07Ikwri9Jf3wbdZvAUP3dwZ2wXgKqLu44Z"
		const stringjUzwJFi = "A94qtJHeqg71wslu4qlFVbtmEgPbxxT8olNDrHWclewleaqfF7SwG38Iu9mkSO4"
		const uintL67AC2R = BigInt("158")
		const WheatFarmxCQvhjr = await WheatFarm.new(stringfRHCumd, stringjUzwJFi, uintL67AC2R, {from: accounts[5]});
		const uintOTEvrw = BigInt("300")
		const addressvs6c0Nc = accounts[4]
		const addressEN4RxEH = accounts[3]
		const boolKQickS7 = await WheatFarmxCQvhjr.approveAndCall.call(addressvs6c0Nc, uintOTEvrw, {from: accounts[5]});
		const stringCsvg4xf = await WheatFarmxCQvhjr.symbol.call({from: accounts[5]});
		const uint6LJSIg = await WheatFarmxCQvhjr.balanceOf.call(addressEN4RxEH, {from: accounts[0]});

		assert.equal(boolKQickS7, true)
		assert.equal(stringCsvg4xf, "A94qtJHeqg71wslu4qlFVbtmEgPbxxT8olNDrHWclewleaqfF7SwG38Iu9mkSO4")
		assert.equal(uint6LJSIg, BigInt("0"))
	});

	it('test for WheatFarm', async () => {
		const stringfRHCumd = "nYB05xpuKkd4oAK7g7iGz71cB0N0jGm37sDU9Y2ue6lgPMwhTR3bc07Ikwri9Jf3wbdZvAUP3dwZ2wXgKqLu44Z"
		const stringjUzwJFi = "A94qtJHeqg71wslu4qlFVbtmEgPbxxT8olNDrHWclewleaqfF7SwG38Iu9mkSO4"
		const uintd6IbhzG = BigInt("158")
		const WheatFarmxCQvhjr = await WheatFarm.new(stringfRHCumd, stringjUzwJFi, uintd6IbhzG, {from: accounts[5]});
		const addressMlEHgGP = accounts[3]
		const uintqMVal6m = BigInt("0")
		const addressp3geyQ4 = accounts[1]
		const uintJpZtprc = await WheatFarmxCQvhjr.balanceOf.call(addressMlEHgGP, {from: accounts[3]});
		const stringC7nHQMo = await WheatFarmxCQvhjr.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolJatC1By = await WheatFarmxCQvhjr.transfer.call(addressp3geyQ4, uintqMVal6m, {from: accounts[1]});

		assert.equal(boolJatC1By, true)
		assert.equal(stringC7nHQMo, "nYB05xpuKkd4oAK7g7iGz71cB0N0jGm37sDU9Y2ue6lgPMwhTR3bc07Ikwri9Jf3wbdZvAUP3dwZ2wXgKqLu44Z")
		assert.equal(uintJpZtprc, BigInt("0"))
	});
})